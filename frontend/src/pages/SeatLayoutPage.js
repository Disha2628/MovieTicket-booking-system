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

  const [seatCategories, setSeatCategories] = useState([]);
  const [rowAlphabets, setRowAlphabets] = useState([]);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [dbSeats, setDbSeats] = useState([]); // ✅ DB seats stored here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Parse layout_structure and set dynamic layout
    const layoutStructure = selectedShow?.show?.layout_structure;
    if (layoutStructure) {
      try {
        const layout = typeof layoutStructure === 'string' ? JSON.parse(layoutStructure) : layoutStructure;
        const rows = layout.rows;
        const cols = layout.columns;
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
          // Invalid layout, no seats
          setSeatCategories([]);
          setRowAlphabets([]);
        }
      } catch (error) {
        console.error("Error parsing layout_structure:", error);
        // No seats
        setSeatCategories([]);
        setRowAlphabets([]);
      }
    } else {
      // No layout_structure, no seats
      setSeatCategories([]);
      setRowAlphabets([]);
    }
  }, [selectedShow]);

  useEffect(() => {
    const fetchSeats = async () => {
      setLoading(true);
      try {
        const showId = selectedShow?.show?.show_id;
        const response = await fetch(
          `http://localhost:5000/api/shows/seats/${showId}`
        );

        if (response.ok) {
          const seats = await response.json();

          if (seats.length === 0) {
            setDbSeats({});
            setLoading(false);
            return;
          }

          // ✅ converting DB objects to:  { "A05": "unavailable" }
          const mappedSeats = {};
          seats.forEach((seat) => {
            mappedSeats[seat.seat_name] = seat.status === 'unavailable' ? 'unavailable' : 'available';
          });

          setDbSeats(mappedSeats);
        } else {
          console.error("Failed to fetch seats from DB");
          setDbSeats({});
        }
      } catch (error) {
        console.error("Error fetching seats:", error);
        setDbSeats({});
      } finally {
        setLoading(false);
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

  if (!selectedShow || !selectedSeatCount) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <p>Missing booking details. Please select show and seats first.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <p>Loading seats...</p>
      </div>
    );
  }

  if (seatCategories.length === 0 || Object.keys(dbSeats).length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <p>No seats available for this show</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-poppins text-center mb-8">
          {movieName} - {selectedShow.theatre} -{" "}
          {selectedShow.show.fullDate?.toLocaleDateString("en-US", {
            weekday: "short",
            day: "2-digit",
            month: "short",
          })}{" "}
          - {selectedShow.show.time}
        </h2>

        <SelectedSeatsDisplay selectedSeats={selectedSeats} />

        <div className="flex justify-center gap-8 mt-8">
          {/* Row alphabets left side */}
          <div className="flex flex-col justify-center text-gray-400 font-semibold">
            {rowAlphabets.map((row) => (
              <div key={row} className="h-11 text-center">
                {row}
              </div>
            ))}
          </div>

          {/* Seat Layout */}
          <div className="flex-1">
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
        <div className="text-center mt-12">
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
            className={`py-4 px-8 rounded-full text-white text-xl font-bold font-poppins border-none transition-all duration-300 ${
              selectedSeats.length === selectedSeatCount
                ? "bg-gradient-to-r from-green-600 to-green-800 cursor-pointer hover:scale-105 shadow-lg shadow-green-500/50"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Confirm Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatLayoutPage;
