# Black Cat
### How do I resolve this effect?
The first eight times the cat would die, it doesn't instead and fully heals. Track its number of lives in some reasonable way. If it gains a deathrite, it does not trigger on the first eight lives, since it doesn't actually die.

If the cat is moved to an inhospitable location, e.g. underground or underwater, the game will notice and try to kill it along with any other minions who should die. The other minion's deathrite effects will resolve first, and they'll go to the cemetery. Then the game will notice the cat should die, and continue trying to kill it until it's actually dead and goes to the cemetery.
