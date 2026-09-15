# Cone Of Flame
### Does Cone of Flame extend across multiple regions?
No, all affected locations must be in the same region as the caster. By default, the damage grid is restricted to the caster’s region. If the caster occupies multiple regions (e.g. a oversized unit), pick a single region where you’re casting the spell.
### All the empty boxes are void and the letters are sites. If the spell is cast from the surface of X, is Z affected?

```json
{
  "_key": "9a8cc554273d",
  "_type": "damageGrid",
  "grid": {
    "rows": [
      {
        "_key": "aafcdf4b-e1f7-460d-8d16-0b5f213be625",
        "_type": "tableRow",
        "cells": [
          "",
          "X",
          ""
        ]
      },
      {
        "_key": "f6379b6d-671f-44ee-98f1-00f4526c304e",
        "_type": "tableRow",
        "cells": [
          "",
          "",
          ""
        ]
      },
      {
        "_key": "2b0291aa-cb25-4117-8262-5895b4176716",
        "_type": "tableRow",
        "cells": [
          "",
          "",
          "Z"
        ]
      }
    ]
  }
}
```
Yes, because it's the same region as the spell effect, even though it's separated by void.
