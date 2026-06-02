import heapq

def dijkstra(graph, start):
    """
    Finds the shortest distance from a start node to all other nodes in a weighted graph.
    
    :param graph: Dictionary representing the adjacency list. 
                  Example: {'A': {'B': 1, 'C': 4}, 'B': {'C': 2}}
    :param start: The starting node.
    :return: A dictionary containing the shortest distance to each reachable node.
    """
    # Initialize all distances to infinity, except the start node which is 0
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    
    # Priority queue stores tuples of (distance, node)
    # The heap always pops the node with the smallest tentative distance
    priority_queue = [(0, start)]
    
    while priority_queue:
        # Get the node with the minimum tentative distance
        current_distance, current_node = heapq.heappop(priority_queue)
        
        # If we found a shorter path to current_node already, skip processing
        if current_distance > distances[current_node]:
            continue
            
        # Explore neighbors of the current node
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            
            # If a shorter path to the neighbor is found, update and push to heap
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
                
    return distances

def run_test():
    # Define a graph using an adjacency list
    example_graph = {
        'A': {'B': 4, 'C': 2},
        'B': {'C': 3, 'D': 2, 'E': 3},
        'C': {'B': 1, 'D': 4, 'E': 5},
        'D': {},
        'E': {'D': 1}
    }
    
    start_vertex = 'A'
    shortest_distances = dijkstra(example_graph, start_vertex)
    
    print(f"Shortest distances from node '{start_vertex}':")
    for target, dist in shortest_distances.items():
        print(f"Distance to {target}: {dist}")
