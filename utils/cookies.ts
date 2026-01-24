import Cookies from "js-cookie";

interface MoveData {
  pickup: string;
  dropoff: string;
  moveType: string;
  timestamp: string; // ISO string
}

export function setMoveCookie(pickup: string, dropoff: string, moveType: string) {
  const data: MoveData = {
    pickup,
    dropoff,
    moveType,
    timestamp: new Date().toISOString()
  };

  Cookies.set("moveData", JSON.stringify(data), {
    expires: 1, // 1 day
    path: "/",
    sameSite: "Lax"
  });
}

export function getMoveCookie(): MoveData | null {
  const cookie = Cookies.get("moveData");
  if (!cookie) return null;
  try {
    return JSON.parse(cookie) as MoveData;
  } catch {
    return null;
  }
}

