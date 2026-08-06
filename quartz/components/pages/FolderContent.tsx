import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

import style from "../styles/listPage.scss"
import { PageList, SortFn } from "../PageList"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { i18n } from "../../i18n"
import { QuartzPluginData } from "../../plugins/vfile"
import { ComponentChildren } from "preact"
import { concatenateResources } from "../../util/resources"
import { trieFromAllFiles } from "../../util/ctx"

const zooPlatformMaps = [
  ["superconducting-moc", "Superconducting"],
  ["semiconducting-moc", "Semiconducting"],
  ["trapped-ion-moc", "Trapped Ion"],
  ["neutral-atom-moc", "Neutral Atom"],
  ["photonic-moc", "Photonic"],
  ["topological-moc", "Majorana / Topological"],
  ["color-center-moc", "Color Center"],
  ["molecular-moc", "Molecular"],
  ["floating-electron-moc", "Floating Electron"],
] as const

const zooCrossCuttingMaps = [
  ["super-semi-moc", "Superconductor–Semiconductor Hybrids"],
  ["spin-photon-moc", "Spin–Photon Interfaces"],
  ["codes-moc", "Codes and Logical Encodings"],
  ["cross-platform-moc", "Cross-Platform Architectures"],
  ["classical-hardware-moc", "Classical Hardware"],
] as const

interface FolderContentOptions {
  /**
   * Whether to display number of folders
   */
  showFolderCount: boolean
  showSubfolders: boolean
  sort?: SortFn
}

const defaultOptions: FolderContentOptions = {
  showFolderCount: true,
  showSubfolders: true,
}

export default ((opts?: Partial<FolderContentOptions>) => {
  const options: FolderContentOptions = { ...defaultOptions, ...opts }

  const FolderContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props

    const trie = (props.ctx.trie ??= trieFromAllFiles(allFiles))
    const folder = trie.findNode(fileData.slug!.split("/"))
    if (!folder) {
      return null
    }

    const allPagesInFolder: QuartzPluginData[] =
      folder.children
        .map((node) => {
          // regular file, proceed
          if (node.data) {
            return node.data
          }

          if (node.isFolder && options.showSubfolders) {
            // folders that dont have data need synthetic files
            const getMostRecentDates = (): QuartzPluginData["dates"] => {
              let maybeDates: QuartzPluginData["dates"] | undefined = undefined
              for (const child of node.children) {
                if (child.data?.dates) {
                  // compare all dates and assign to maybeDates if its more recent or its not set
                  if (!maybeDates) {
                    maybeDates = { ...child.data.dates }
                  } else {
                    if (child.data.dates.created > maybeDates.created) {
                      maybeDates.created = child.data.dates.created
                    }

                    if (child.data.dates.modified > maybeDates.modified) {
                      maybeDates.modified = child.data.dates.modified
                    }

                    if (child.data.dates.published > maybeDates.published) {
                      maybeDates.published = child.data.dates.published
                    }
                  }
                }
              }
              return (
                maybeDates ?? {
                  created: new Date(),
                  modified: new Date(),
                  published: new Date(),
                }
              )
            }

            return {
              slug: node.slug,
              dates: getMostRecentDates(),
              frontmatter: {
                title: node.displayName,
                tags: [],
              },
            }
          }
        })
        .filter((page) => page !== undefined) ?? []
    const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
    const classes = cssClasses.join(" ")
    const listProps = {
      ...props,
      sort: options.sort,
      allFiles: allPagesInFolder,
    }

    const content = (
      (tree as Root).children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, tree)
    ) as ComponentChildren
    const normalizedSlug = fileData.slug?.toLowerCase().replace(/\/index$/, "")
    const isZooLanding = normalizedSlug === "zoo"

    return (
      <div class="popover-hint">
        <article class={classes}>{content}</article>
        {isZooLanding && (
          <section aria-label="Curated Qubit Zoo navigation">
            <p>
              Start with these curated, non-exclusive maps. An entry can appear in more than one
              map; membership counts describe organization, not platform importance or maturity.
            </p>
            <h2>Physical-platform maps</h2>
            <ul>
              {zooPlatformMaps.map(([slug, label]) => (
                <li>
                  <a href={`/MOCs/${slug}`}>{label}</a>
                </li>
              ))}
            </ul>
            <h2>Encodings, interfaces, and systems roles</h2>
            <ul>
              {zooCrossCuttingMaps.map(([slug, label]) => (
                <li>
                  <a href={`/MOCs/${slug}`}>{label}</a>
                </li>
              ))}
            </ul>
            <p>
              See the <a href="/MOCs/qubit-zoo-index-moc">complete curated index</a> for guided
              cross-family routes and the editorial policy.
            </p>
          </section>
        )}
        <div class="page-listing">
          {isZooLanding ? (
            <details>
              <summary>Browse all {allPagesInFolder.length} entries alphabetically</summary>
              <div>
                <PageList {...listProps} />
              </div>
            </details>
          ) : (
            <>
              {options.showFolderCount && (
                <p>
                  {i18n(cfg.locale).pages.folderContent.itemsUnderFolder({
                    count: allPagesInFolder.length,
                  })}
                </p>
              )}
              <div>
                <PageList {...listProps} />
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  FolderContent.css = concatenateResources(style, PageList.css)
  return FolderContent
}) satisfies QuartzComponentConstructor
