# Maelstrom
### Does the movement get resolved simultaneously?
Yes, all the steps are simultaneously resolved (which might then provoke a variety of triggers).
### If I choose to pull a minion, do I have to pull all minions?
Yes.
### Can I use Floodplain before Maelström triggers?
No. Floodplain is an activated ability, which can only be activated during your Main Phase.
### Consider the group of sites below. An oversized minion occupies 1-2-4-5. Maelström is #5. Can the oversized minion be pulled in any way?

```json
{
  "_key": "2a4c4e0efa23",
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


Yes. When pulling or pushing an oversized unit, choose a single location the oversized unit occupies (and meets the requirement of the effect), and push/pull from there. So, assuming Sites 2 and 4 are water sites as well, you could choose Site 2: Oversized minion is pulled South, and ends up at 4-5-7-8. OR, choose Site 4: Oversized minion is pulled East, and ends up at 2-3-5-6. OR, choose Site 5: Oversized minion isn’t pulled at all.
