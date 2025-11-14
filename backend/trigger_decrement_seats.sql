CREATE TRIGGER decrement_available_seats
AFTER INSERT ON booking_seats
FOR EACH ROW
BEGIN
    DECLARE seat_count INT;

    -- Get the show_id from the seat
    SELECT show_id INTO seat_count FROM seats WHERE seat_id = NEW.seat_id;

    -- Decrement available_seats, but ensure it doesn't go below 0
    UPDATE shows
    SET available_seats = GREATEST(available_seats - 1, 0)
    WHERE Show_Id = seat_count;
END
