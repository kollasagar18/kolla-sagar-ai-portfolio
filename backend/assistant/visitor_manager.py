import json
from pathlib import Path
from datetime import date

# Path to backend/data/portfolio_views.json
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_FILE = BASE_DIR / "data" / "portfolio_views.json"


def update_views():
    """Increase today's views and total views."""

    with open(DATA_FILE, "r") as file:
        data = json.load(file)

    today = str(date.today())

    # Reset today's views if a new day starts
    if data["last_reset"] != today:
        data["today_views"] = 0
        data["last_reset"] = today

    # Increase counters
    data["today_views"] += 1
    data["total_views"] += 1

    # Save back to JSON
    with open(DATA_FILE, "w") as file:
        json.dump(data, file, indent=4)

    return data


def get_views():
    """Return current visitor statistics."""

    with open(DATA_FILE, "r") as file:
        return json.load(file)