export type Chrono = {
  "id": bigint,
  "start_date": Date | null,
  "start_year_unknown": boolean,
  "start_month_unknown": boolean,
  "start_day_unknown": boolean,
  "end_date": Date | null,
  "current": boolean,
  "end_year_unknown": boolean,
  "end_month_unknown": boolean,
  "end_day_unknown": boolean,
}

export type Node = Chrono & {
  "short_name": string,
  "aliases": string,
  "description": string,
  "json_data": null | object,
  "node_type": bigint | object
}

export type Edge = Chrono & {
  "left_node": bigint | Node
  "right_node": bigint | Node
  "edge_type": bigint
}

export type NodeGraph = {
  "root_node": [Node],
  "left_edges": [Edge] | [],
  "right_edges": [Edge] | [],
  "n_nodes_edges": [Edge] | []

}

export type ParamTypes = {
  pk: string
}
