# Flanking Maneuver
### Do the locations need to be in the same region?
No. Teleport effects ignore regional boundaries unless otherwise specified, and the only restriction on this effect is that the locations be a chess knight's move apart on the board.

For example, if A is a void square, and B contains a site, Flanking Maneuver can move units from that void location to either the surface or subsurface of the site.

```json
{
  "_key": "265583cb8073",
  "_type": "damageGrid",
  "grid": {
    "rows": [
      {
        "_key": "a28c90d2-a5cb-4166-bdc5-664d6dab6312",
        "_type": "tableRow",
        "cells": [
          "A",
          "",
          ""
        ]
      },
      {
        "_key": "a8e93027-4ce5-418b-a581-9e1cd91a4a5a",
        "_type": "tableRow",
        "cells": [
          "",
          "",
          "B"
        ]
      }
    ]
  }
}
```


