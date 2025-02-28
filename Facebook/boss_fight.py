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

def get_best_damage_to_boss(health, damage, boss_power):
    max_damage1 = 0
    max_damage2 = 0
    idx1 = None
    idx2 = None
    for i in range(len(health)):
        warrior_damage = health[i] * damage[i] / boss_power
        if warrior_damage > max_damage1:
            temp = max_damage1
            max_damage1 = warrior_damage
            max_damage2 = temp
            temp_idx = idx1
            idx1 = i
            idx2 = temp_idx
        elif warrior_damage > max_damage2:
            max_damage2 = warrior_damage
            idx2 = i
    
               
    t1 = health[idx1]/boss_power
    t2 = health[idx2]/boss_power
    total_damage1 = t1 * damage[idx1] + (t1 + t2) * damage[idx2]
    total_damage2 = t2 * damage[idx2] + (t1 + t2) * damage[idx1]

    print(total_damage1, total_damage2)
    return total_damage1
        


get_best_damage_to_boss(H, D, B)

H = [1, 1, 2, 100]
D = [1, 2, 1, 3]
B = 8

get_best_damage_to_boss(H, D, B)

H = [1, 1, 2, 3]
D = [1, 2, 1, 100]
B = 8

get_best_damage_to_boss(H, D, B)
