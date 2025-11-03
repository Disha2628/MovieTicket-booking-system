import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SelectedSeatsDisplay from "../components/SelectedSeatsDisplay";
import SeatCategory from "../components/SeatCategory";
import Screen from "../components/Screen";

const SeatLayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedShow, selectedSeatType, selectedSeatCount, movieName } =
    location.state || {};

  // Fallback data
  const fallbackSeatCategories = [
    {
      name: "Platinum",
      price: 280,
      rows: [
        { row: "A", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
        { row: "B", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
      ],
    },
    {
      name: "Gold",
      price: 220,
      rows: [
        { row: "C", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
        { row: "D", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
        { row: "E", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
        { row: "F", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
      ],
    },
    {
      name: "Silver",
      price: 180,
      rows: [
        { row: "G", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
        { row: "H", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
        { row: "I", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
        { row: "J", seats: Array.from({ length: 18 }, (_, i) => (i + 1).toString().padStart(2, "0")) },
      ],
    },
  ];
  const fallbackRowAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const [seatCategories, setSeatCategories] = useState(fallbackSeatCategories);
  const [rowAlphabets, setRowAlphabets] = useState(fallbackRowAlphabets);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [dbSeats, setDbSeats] = useState([]); // ✅ DB seats stored here

  useEffect(() => {
    // Parse layout_structure and set dynamic layout
    const layoutStructure = selectedShow?.show?.layout_structure;
    if (layoutStructure) {
      try {
        const layout = typeof layoutStructure === 'string' ? JSON.parse(layoutStructure) : layoutStructure;
        const rows = layout.rows;
        const cols = layout.columns;
        console.log(rows , " " , cols);
        if (rows >= 5 && cols > 0) {
          // Generate row alphabets
          const alphabets = [];
          for (let i = 0; i < rows; i++) {
            alphabets.push(String.fromCharCode(65 + i)); // A, B, C, ...
          }
          setRowAlphabets(alphabets);

          // Generate seats for each row
          const generateSeats = (numCols) => Array.from({ length: numCols }, (_, i) => (i + 1).toString().padStart(2, "0"));

          // Platinum: first 2 rows
          const platinumRows = alphabets.slice(0, 2).map(row => ({ row, seats: generateSeats(cols) }));

          // Silver: last 3 rows
          const silverRows = alphabets.slice(-3).map(row => ({ row, seats: generateSeats(cols) }));

          // Gold: remaining rows in between
          const goldRows = alphabets.slice(2, rows - 3).map(row => ({ row, seats: generateSeats(cols) }));

          const dynamicCategories = [
            { name: "Platinum", price: 280, rows: platinumRows },
            { name: "Gold", price: 220, rows: goldRows },
            { name: "Silver", price: 180, rows: silverRows },
          ];
          setSeatCategories(dynamicCategories);
        } else {
          // Invalid layout, use fallback
          setSeatCategories(fallbackSeatCategories);
          setRowAlphabets(fallbackRowAlphabets);
        }
      } catch (error) {
        console.error("Error parsing layout_structure:", error);
        // Use fallback
        setSeatCategories(fallbackSeatCategories);
        setRowAlphabets(fallbackRowAlphabets);
      }
    } else {
      // No layout_structure, use fallback
      setSeatCategories(fallbackSeatCategories);
      setRowAlphabets(fallbackRowAlphabets);
    }
  }, [selectedShow]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const showId = selectedShow?.show?.show_id;
        const response = await fetch(
          `http://localhost:5000/api/shows/seats/${showId}`
        );

        if (response.ok) {
          const seats = await response.json();

          // ✅ converting DB objects to:  { "A05": "unavailable" }
          const mappedSeats = {};
          seats.forEach((seat) => {
            mappedSeats[seat.seat_name] = seat.status === 'unavailable' ? 'unavailable' : 'available';
          });

          setDbSeats(mappedSeats);
        } else {
          console.error("Failed to fetch seats from DB");
        }
      } catch (error) {
        console.error("Error fetching seats:", error);
      }
    };

    if (selectedShow?.show?.show_id) fetchSeats();
  }, [selectedShow]);

  const toggleSeatSelection = (seatName) => {
    const availability = dbSeats[seatName];

    if (availability === "unavailable") return; // ❌ Locked - can't select

    if (selectedSeats.includes(seatName)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatName));
    } else {
      if (selectedSeats.length < selectedSeatCount) {
        setSelectedSeats([...selectedSeats, seatName]);
      } else {
        alert(`You can only select ${selectedSeatCount} seats.`);
      }
    }
  };

  if (!selectedShow || !selectedSeatType || !selectedSeatCount) {
    return (
      <div style={{ padding: "20px", color: "white" }}>
        Missing booking details. Please select show and seats first.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "30px",
        color: "white",
        maxWidth: "1000px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1f2937",
        borderRadius: "12px",
        border: "4px solid #ffd700",
      }}
    >
      <h2 style={{ color: "#d4af37", marginBottom: "20px" }}>
        {movieName} - {selectedShow.theatre} -{" "}
        {selectedShow.show.fullDate?.toLocaleDateString("en-US", {
          weekday: "short",
          day: "2-digit",
          month: "short",
        })}{" "}
        - {selectedShow.show.time}
      </h2>

      <SelectedSeatsDisplay selectedSeats={selectedSeats} />

      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        {/* Row alphabets left side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#aaa",
            fontWeight: "600",
          }}
        >
          {rowAlphabets.map((row) => (
            <div key={row} style={{ height: "45px", textAlign: "center" }}>
              {row}
            </div>
          ))}
        </div>

        {/* Seat Layout */}
        <div style={{ flex: 1 }}>
          {seatCategories.map((category) => (
            <SeatCategory
              key={category.name}
              category={category}
              selectedSeats={selectedSeats}
              onSeatClick={toggleSeatSelection}
              dbSeats={dbSeats} // ✅ pass to category
            />
          ))}
        </div>
      </div>

      <Screen />

      {/* Confirm Seats */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          disabled={selectedSeats.length !== selectedSeatCount}
          onClick={() =>
            navigate("/booking-confirmation", {
              state: {
                selectedShow,
                selectedSeatType,
                selectedSeatCount,
                movieName,
                selectedSeats,
              },
            })
          }
          style={{
            padding: "12px 24px",
            backgroundColor:
              selectedSeats.length === selectedSeatCount ? "#d4af37" : "#555",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor:
              selectedSeats.length === selectedSeatCount
                ? "pointer"
                : "not-allowed",
          }}
        >
          Confirm Seats
        </button>
      </div>
    </div>
  );
};

export default SeatLayoutPage;
