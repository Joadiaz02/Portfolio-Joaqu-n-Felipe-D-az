import type { Technology } from '../../types/portfolio'
import { Badge } from './Badge'

export function TechnologyBadge({ technology }: { technology: Technology }) {
  return <Badge>{technology.name}</Badge>
}
