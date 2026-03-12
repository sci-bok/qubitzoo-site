import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/genealogy.inline"
import style from "./styles/genealogy.scss"

export default ((_opts?: undefined) => {
  const QubitGenealogy: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={displayClass ?? ""}>
        <div id="genealogy-container">
          <div id="genealogy-tooltip"></div>
        </div>
      </div>
    )
  }

  QubitGenealogy.css = style
  QubitGenealogy.afterDOMLoaded = script

  return QubitGenealogy
}) satisfies QuartzComponentConstructor
