import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/transit-map.inline"
import style from "./styles/transit-map.scss"

export default ((_opts?: undefined) => {
  const QubitTransitMap: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={displayClass ?? ""}>
        <div id="transit-map-container">
          <div id="transit-map-tooltip"></div>
        </div>
      </div>
    )
  }

  QubitTransitMap.css = style
  QubitTransitMap.afterDOMLoaded = script

  return QubitTransitMap
}) satisfies QuartzComponentConstructor
