# Army Of The Dead
### If the Army moves through many locations (e.g. Grapple Shot, Seven-league Boots), does it leave many Skeletons behind?
Yes! Leave a Skeleton behind each time the Army enters a new location (or takes damage).
### If an effect grants this free movement (e.g. Arcade of Bones), can I spawn infinite Skeleton tokens?
No. Whenever you declare a movement path, you cannot repeat specific steps. Lets say we have sites arranged like this in a row, with Army of the Dead starting on site A, along with an [[Arcade of Bones]]:

```json
{
  "_key": "e76956c58a56",
  "_type": "damageGrid",
  "grid": {
    "rows": [
      {
        "_key": "76d2c557-239f-48f5-b393-87abae7dfd57",
        "_type": "tableRow",
        "cells": [
          "A",
          "B",
          "C"
        ]
      }
    ]
  }
}
```

You could declare the following movement path for the Army:

- A to B
- B to C
- C to B
- B to A

None of those steps repeat exactly, so it's all perfectly legal, and you would spawn a Skeleton for each of those steps, for a total of 4 Skeletons spawned. You cannot, however, put another A to B step on the path, since that would be a repeat of the first step.
### Are the skeletons spawned by this ability summoned? Do they enter the location?
Yes! They are summoned, and enter the location where they appear.
