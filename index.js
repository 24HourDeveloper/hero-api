const express = require("express");

const app = express();

const fictionalHeros = {
  maleHeros: {
    spawn: {
      realName: "Albert Francis Simmons",
      height: "6' 11",
      weight: 234,
      birthPLace: "Detroit Michigan",
      powers:
        "Teleport, to temporarily transform (and heal ) his features, superhuman strength and endurance"
    },
    luke_cage: {
      realName: "Carl Lucas",
      height: "6' 6",
      weight: 425,
      birthPLace: "New York, Harlem",
      powers:
        "Superhuman strength and durability, unbreakable skin and accelerated healing factor"
    },
    blade: {
      realName: "Eric Brooks",
      height: "6' 2",
      weight: 215,
      birthPLace: "London England",
      powers:
        "Half man half vampire, superhuman strength, speed, stamina, agility, reflexes, and senses"
    },
    black_panther: {
      realName: "T'Challa",
      height: "6",
      weight: 200,
      birthPLace: "Wakanda Africa",
      powers:
        "Acute senses, enhanced strength, speed, agility, stamina, durability, healing, and reflexes"
    }
  },
  femaleHeros: {
    storm: {
      realName: "Ororo Munroe",
      height: "5' 11",
      weight: 145,
      birthPLace: "New York City",
      powers:
        "The Earth's electromagnetic field and ability to manipulate the earths weather."
    },
    vixen: {
      realName: "Mari McCabe",
      height: "5' 9",
      weight: 140,
      birthPLace: "Zambesi",
      powers:
        "The innate ability to make direct contact with the Earth's morphogenetic field, which is sometimes known as the 'Red'. This contact with the 'Red' allows her to draw upon the abilities of any animal that has ever lived on the planet"
    }
  }
};

const noneFictionalHeros = {
  maleHeros: {
    frederickD: {
      name: "Frederick Douglass",
      born: "Feb 14, 1818",
      died: "Feb 20, 1895"
    },
    natTurner: {
      name: "Nate Turner",
      born: "Oct 2 1800",
      died: "Nov 11 1831"
    }
  },
  femaleHeros: {
    maya: {
      name: "Maya Angelou",
      born: "April 4, 1924",
      died: "May 28, 2014"
    },
    harriet: {
      name: "Harriet Tubman",
      born: "1820",
      died: "Mar 10 1913"
    }
  }
};

app.get("/fictional-heros", (req, res) => res.json(fictionalHeros));

app.get("/none-fictional-heros", (req, res) => res.json(noneFictionalHeros));

app.listen(5000, () => console.log("Listening on port 5000"));
