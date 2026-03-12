import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/fidelity-tracker.inline"
import style from "./styles/fidelity-tracker.scss"

export default ((_opts?: undefined) => {
  const FidelityTracker: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={displayClass ?? ""}>
        <div id="fidelity-container">
          <div id="fidelity-tooltip"></div>
        </div>
      </div>
    )
  }

  FidelityTracker.css = style
  FidelityTracker.afterDOMLoaded = script

  return FidelityTracker
}) satisfies QuartzComponentConstructor
