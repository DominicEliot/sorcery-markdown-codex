# Guile Sirens
### Can it target a unit in a different region?
No. Targeting (by default) requires the source and the target to be in the same region.
### Does the target minion use its enhanced move abilities?
Yes. When an effect has a unit “take steps,” it uses its enhanced move abilities granted by keywords such Voidwalk, Burrowing, Submerge, and Airborne.
### Does it tap the target minion? Can this movement be intercepted?
No and no. This isn’t the Move and Attack basic ability, which is what requires tapping and can be intercepted.
### Consider the group of sites below. An oversized minion occupies 1-2-4-5. Guile Sirens is #5. Can the oversized minion be pulled in any way?

```json
{
  "_key": "d86e06c49ca1",
  "_type": "damageGrid",
  "grid": {
    "rows": [
      {
        "_key": "e34a493c-909a-458d-9643-1a5a1a220fa8",
        "_type": "tableRow",
        "cells": [
          "1",
          "2",
          "3"
        ]
      },
      {
        "_key": "e9f60d1d-1350-49f4-ab41-592863dcb70a",
        "_type": "tableRow",
        "cells": [
          "4",
          "5",
          "6"
        ]
      },
      {
        "_key": "120eb860-2415-4309-b4ec-d74f2fb66f22",
        "_type": "tableRow",
        "cells": [
          "7",
          "8",
          "9"
        ]
      }
    ]
  }
}
```


Yes. When pulling or pushing an oversized unit, choose a single location the oversized unit occupies (and meets the requirement of the effect), and push/pull from there. So, you could choose Site 2: Oversized minion is pulled South, and ends up at 4-5-7-8. OR, choose Site 4: Oversized minion is pulled East, and ends up at 2-3-5-6. OR, choose Site 5: Oversized minion isn’t pulled at all.
### Is the ability mandatory?
Yes. It doesn’t use the word “may.”
