H = [2, 1, 4]
D = [3, 1, 2]
B = 4

def get_best_damage_to_boss(health, damage, boss_power):
    max_damage = 0
    for i in range(len(health)):
        for j in range(i + 1, len(health)):
            t1 = health[i]/boss_power
            t2 = health[j]/boss_power
            total_damage1 = t1 * damage[i] + (t1 + t2) * damage[j]
            total_damage2 = t2 * damage[j] + (t1 + t2) * damage[i]
            max_damage = max(max_damage, total_damage1, total_damage2 )
    print(max_damage)
    return max_damage

get_best_damage_to_boss(H, D, B)

H = [1, 1, 2, 100]
D = [1, 2, 1, 3]
B = 8

get_best_damage_to_boss(H, D, B)

H = [1, 1, 2, 3]
D = [1, 2, 1, 100]
B = 8

get_best_damage_to_boss(H, D, B)
