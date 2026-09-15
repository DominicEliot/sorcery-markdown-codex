# Vindictive Nation
### When moving sites around, does Vindictive Nation protect the nearby sites before or after the move?
Vindictive Nation protects the sites it was nearby before the move. For example:

```json
{
  "_key": "d8ccebea21ca",
  "_type": "damageGrid",
  "grid": {
    "rows": [
      {
        "_key": "a90c0f64-570e-4a9a-8bd0-d9dd5dfb2688",
        "_type": "tableRow",
        "cells": [
          "I",
          "R",
          "A"
        ]
      },
      {
        "_key": "2a00b298-3668-4cd0-b12a-2938ce1988e9",
        "_type": "tableRow",
        "cells": [
          "",
          "",
          ""
        ]
      }
    ]
  },
  "markDefs": null
}
```

- I = Vindictive Nation
- R = Rubble
- A = Allied Site

My opponent casts Earthquake and rearranges the two rightmost sites:

```json
{
  "_key": "43697cf4c777",
  "_type": "damageGrid",
  "grid": {
    "rows": [
      {
        "_key": "a90c0f64-570e-4a9a-8bd0-d9dd5dfb2688",
        "_type": "tableRow",
        "cells": [
          "I",
          "A",
          "R"
        ]
      },
      {
        "_key": "2a00b298-3668-4cd0-b12a-2938ce1988e9",
        "_type": "tableRow",
        "cells": [
          "",
          "",
          ""
        ]
      }
    ]
  },
  "markDefs": null
}
```

Even though site A moved and is now nearby Vindictive Nation, my opponent doesn't lose any life because A wasn't nearby Vindictive Nation before the move.

Alternately, if we started from the second situation and Earthquake moved sites into the first situation, my opponent would lose 3 life because they moved a site that was nearby Vindictive Nation (even though the site ended up no longer nearby).
### If my Vindictive Nation is silenced by my opponent, e.g. Smokestacks of Gnaak, will my opponent lose life?
Yes! Silence from Smokestacks is applied as a passive ability, but the act of silencing literally triggers Vindictive Nation's ability. So as Vindictive Nation becomes silenced, its ability triggers. See the ((Triggered Ability)) codex entry for details.
### Does this effect have time to resolve if the site itself is getting destroyed?
Yes! They are very vindictive.
### Does "modifying" a site include Flooding it?
Yes, since Flooded is an ability that gets added to the site.
### If my Vindictive Nation is affected by my opponent's Atlantean Fate, do they lose 1 or 2 life?
Two life. Vindictive Nation is flooded (which counts as modifying it) and then silenced (which also counts as modifying it).
