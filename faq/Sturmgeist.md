# Sturmgeist
### When does this ability resolve?
Whenever an enemy announces a Magic spell, after they've paid the costs but before the spell resolves.
### What does "closer" mean?
Determine which location it could step to using its normal movement that would be closest to the caster that triggered it.

For instance, assume the Sturmgeist is at location S, and the spellcaster is at location C:

```json
{
  "_key": "a4a228ebce54",
  "_type": "damageGrid",
  "grid": {
    "rows": [
      {
        "_key": "5b82850f-de27-4101-b1c8-c33d293c32a3",
        "_type": "tableRow",
        "cells": [
          "C",
          "B"
        ]
      },
      {
        "_key": "23335e4d-072b-45c0-8f72-472c0320aa8f",
        "_type": "tableRow",
        "cells": [
          "A",
          "S"
        ]
      }
    ]
  }
}
```

Because the Sturmgeist has the airborne ability, it is able to get from S to C in one step, so it must do so, leaving it zero steps away from the caster.  It cannot move to A or B, because those locations are still one step away from the caster, which is further than zero steps.
### If the spellcaster dies before the spell they cast resolves, will their spell still resolve?
No! If the spellcaster is dead before their spell resolves, the spell will not resolve at all. See "((Source is No Longer in the Realm))" for more details.
### What if the Magic is cast by something other than a unit?
The Sturmgeist only hears spells cast by enemies, which are units. Spells cast by artifacts (e.g. Omphalos) or sites (e.g. River of Flame) will not trigger its ability.
