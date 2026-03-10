import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/sunburst.inline"
import style from "./styles/sunburst.scss"

export default (() => {
  const QubitSunburst: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={displayClass ?? ""}>
        <div id="sunburst-container">
          <div id="sunburst-tooltip"></div>
        </div>
      </div>
    )
  }

  QubitSunburst.css = style
  QubitSunburst.afterDOMLoaded = script

  return QubitSunburst
}) satisfies QuartzComponentConstructor
