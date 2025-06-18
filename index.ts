import "./src/components"
import { FxModal } from "./src/component/modal"

if (import.meta.env.VITE_VERSION) {
  const ele = document.getElementById("version")!
  ele.innerText = `v${import.meta.env.VITE_VERSION}`
}

//=================================================================================================
// INTERACTION ON THE SAMPLE PAGE
//=================================================================================================

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll<HTMLElement>("a[noop]").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault())
  })

  document.querySelectorAll("[data-modal-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const ele = event.target as HTMLElement
      const modalId = ele.dataset.modalId!
      const modal = document.getElementById(modalId) as FxModal
      modal.show()
      event.preventDefault()
    })
  })

  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest("fx-modal") as FxModal
      modal.close()
    })
  })

  document.querySelectorAll<HTMLElement>("[data-sample]").forEach((details) => {
    const example = SAMPLE[details.dataset.sample!]
    const content = highlight.highlight(example.content, { language: example.language }).value
    const pre = document.createElement("pre")
    const code = document.createElement("code")
    pre.appendChild(code)
    code.innerHTML = content
    details.appendChild(pre)
  })
})

//=================================================================================================
// SYNTAX HIGHLIGHT EXAMPLE CODE
//=================================================================================================

import dedent from "dedent"
import highlight from "highlight.js/lib/core"
import highlightXml from "highlight.js/lib/languages/xml"
import highlightCss from "highlight.js/lib/languages/css"
import "highlight.js/styles/github.min.css"

highlight.registerLanguage("html", highlightXml)
highlight.registerLanguage("css", highlightCss)

interface Sample {
  language: string
  content: string
}

const SAMPLE: Record<string, Sample> = { 
  "bg-graphpaper": {
    language: "html",
    content: dedent`
      <div class="bg-graphpaper">
        ...
      </div>
    `,
  },
  "reset": {
    language: "css",
    content: dedent`
      :root {
        font-size: 62.5%; /* ensure 1rem = 10px */
      }

      body {
        @apply bg-light text-dark text-base font-medium;
      }`
  },
  "colors": {
    language: "html",
    content: dedent`
      <div class="bg-light   text-dark">  light   </div>
      <div class="bg-dark    text-light"> dark    </div>
      <div class="bg-gray    text-dark">  gray    </div>
      <div class="bg-primary text-light"> primary </div>
      <div class="bg-success text-dark">  success </div>
      <div class="bg-warn    text-dark">  warn    </div>
      <div class="bg-danger  text-light"> danger  </div>
    `,
  },
  "colors2": {
    language: "html",
    content: dedent`
      <div class="bg-ice     text-light"> ice     </div>
      <div class="bg-kiwi    text-dark">  kiwi    </div>
      <div class="bg-jiggly  text-dark">  jiggly  </div>
    `,
  },
  "color-shades": {
    language: "html",
    content: dedent`
      <div class="bg-gray-50  text-dark">  gray-50  </div>
      <div class="bg-gray-100 text-dark">  gray-100 </div>
      <div class="bg-gray-200 text-dark">  gray-200 </div>
      <div class="bg-gray-300 text-dark">  gray-300 </div>
      <div class="bg-gray-400 text-light"> gray-400 </div>
      <div class="bg-gray-500 text-light"> gray-500 </div>
      <div class="bg-gray-600 text-light"> gray-600 </div>
      <div class="bg-gray-700 text-light"> gray-700 </div>
      <div class="bg-gray-800 text-light"> gray-800 </div>
      <div class="bg-gray-900 text-light"> gray-900 </div>
    `,
  },
  "text-size": {
    language: "html",
    content: dedent`
      <!-- use (custom) paragraph elements -->

      <pl> Large Text  </pl>
      <p>  Normal Text </p>
      <ps> Small Text  </p>
      <pt> Tiny Text   </p>

      <!-- or use named sizes -->

      <p class="text-large"> Large Text  </p>
      <p class="text-base">  Normal Text </p>
      <p class="text-small"> Small Text  </p>
      <p class="text-tiny">  Tiny Text   </p>

      <!-- or use a more explicit (px) size class -->

      <p class="text-10"> 10px </p>
      <p class="text-12"> 12px </p>
      <p class="text-14"> 14px </p>
      <p class="text-16"> 16px </p>
      <p class="text-20"> 20px </p>
      <p class="text-24"> 24px </p>
      <p class="text-32"> 32px </p>
      <p class="text-36"> 36px </p>
      <p class="text-40"> 40px </p>
      <p class="text-46"> 46px </p>
      <p class="text-54"> 54px </p>
      <p class="text-62"> 62px </p>
    `,
  },
  "text-weight": {
    language: "html",
    content: dedent`
      <p class="font-bold">     Bold      (700) </p>
      <p class="font-semibold"> Semi-Bold (600) </p>
      <p class="font-medium">   Medium    (500) </p>
      <p class="font-normal">   Normal    (400) </p>
    `,
  },
  "headings": {
    language: "html",
    content: dedent`
      <d1> Display 1.       </d1>
      <d2> Display 2.       </d2>
      <d3> Display 3.       </d3>
      <d4> Display 4.       </d4>
      <h1> Heading 1.       </h1>
      <h2> Heading 2.       </h2>
      <h3> Heading 3.       </h3>
      <h4> Heading 4.       </h4>
      <h5> Heading 5.       </h5>
      <pl> Paragraph Large. </pl>
      <h6> Heading 6.       </h6>
      <p>  Paragraph.       </p>
      <hs> Heading Small.   </hs>
      <ps> Paragrah Small.  </ps>
      <ht> Heading Tiny.    </ht>
      <pt> Paragraph Tiny.  </pt>
    `,
  },
  "spacing": {
    language: "html",
    content: dedent`
      <!-- tailwind utility classes -->

      <div class="p-1"> padding 1 (4px) </div>
      <div class="m-1"> margin  1 (4px) </div>
      <div class="w-1"> width   1 (4px) </div>
    `,
  },
  "logos": {
    language: "html",
    content: dedent`
      <void-logo   class="text-32 text-dark"></void-logo>
      <fiasco-logo class="text-32 text-primary"></fiasco-logo>
    `,
  },
  "logo-colors": {
    language: "html",
    content: dedent`
      <fiasco-logo class="text-primary" ></fiasco-logo>
      <fiasco-logo class="text-success" ></fiasco-logo>
      <fiasco-logo class="text-warn"    ></fiasco-logo>
      <fiasco-logo class="text-danger"  ></fiasco-logo>
      <fiasco-logo class="text-jiggly"  ></fiasco-logo>
      <fiasco-logo class="text-ice"     ></fiasco-logo>
      <fiasco-logo class="text-kiwi"    ></fiasco-logo>
      <fiasco-logo class="text-dark"    ></fiasco-logo>
      <fiasco-logo class="text-gray"    ></fiasco-logo>
    `,
  },
  "logo-sizes": {
    language: "html",
    content: dedent`
      <fiasco-logo class="text-tiny"   ></fiasco-logo>
      <fiasco-logo class="text-small"  ></fiasco-logo>
      <fiasco-logo class="text-base"   ></fiasco-logo>
      <fiasco-logo class="text-large"  ></fiasco-logo>
      <fiasco-logo class="text-20"     ></fiasco-logo>
      <fiasco-logo class="text-24"     ></fiasco-logo>
      <fiasco-logo class="text-32"     ></fiasco-logo>
      <fiasco-logo class="text-36"     ></fiasco-logo>
      <fiasco-logo class="text-40"     ></fiasco-logo>
      <fiasco-logo class="text-46"     ></fiasco-logo>
      <fiasco-logo class="text-54"     ></fiasco-logo>
      <fiasco-logo class="text-62"     ></fiasco-logo>
    `,
  },
  "icons": {
    language: "html",
    content: dedent`
      <i class="iconoir-hand-brake"></i>
      <i class="iconoir-accessibility-sign"></i>
      <i class="iconoir-accessibility-tech"></i>
      <i class="iconoir-accessibility"></i>
      <i class="iconoir-activity"></i>
      <i class="iconoir-adobe-after-effects"></i>
      <!-- ... 1500 more -->
    `,
  },
  "icon-colors": {
    language: "html",
    content: dedent`
      <i class="iconoir-arcade text-dark"    ></i>
      <i class="iconoir-arcade text-primary" ></i>
      <i class="iconoir-arcade text-success" ></i>
      <i class="iconoir-arcade text-warn"    ></i>
      <i class="iconoir-arcade text-danger"  ></i>
    `,
  },
  "icon-sizes": {
    language: "html",
    content: dedent`
      <i class="iconoir-arcade text-tiny"  ></i>
      <i class="iconoir-arcade text-small" ></i>
      <i class="iconoir-arcade text-base"  ></i>
      <i class="iconoir-arcade text-large" ></i>
      <i class="iconoir-arcade text-20"    ></i>
      <i class="iconoir-arcade text-24"    ></i>
      <i class="iconoir-arcade text-32"    ></i>
      <i class="iconoir-arcade text-36"    ></i>
      <i class="iconoir-arcade text-40"    ></i>
      <i class="iconoir-arcade text-46"    ></i>
      <i class="iconoir-arcade text-54"    ></i>
      <i class="iconoir-arcade text-62"    ></i>
    `,
  },
  "links": {
    language: "html",
    content: dedent`
      <a class="link"                href="#"> Primary Link   </a>
      <a class="link link-secondary" href="#"> Secondary Link </a>
      <a class="link link-success"   href="#"> Success Link   </a>
      <a class="link link-danger"    href="#"> Danger Link    </a>
      <a class="link link-warn"      href="#"> Warn Link      </a>
    `,
  },
  "tabs": {
    language: "html",
    content: dedent`
      <tabs>
        <a href="#" class="tab selected">
          <i class="iconoir-hammer"></i>
          Build
        </a>
        <a href="#" class="tab">
          <i class="iconoir-arcade"></i>
          Play
        </a>
        <a href="#" class="tab">
          <i class="iconoir-share-android"></i>
          Share
        </a>
        <a href="#" class="tab shrink">
          +
        </a>
      </tabs>
    `,
  },
  "buttons": {
    language: "html",
    content: dedent`
      <button class="btn-primary">   Primary   </button>
      <button class="btn-secondary"> Secondary </button>
      <button class="btn-tertiary">  Tertiary  </button>
      <button class="btn-danger">    Danger    </button>
      <button class="btn-success">   Success   </button>

      <button class="btn-primary">   <i class="iconoir-pokeball"></i> Primary   </button>
      <button class="btn-secondary"> <i class="iconoir-pokeball"></i> Secondary </button>
      <button class="btn-tertiary">  <i class="iconoir-pokeball"></i> Tertiary  </button>
      <button class="btn-danger">    <i class="iconoir-pokeball"></i> Danger    </button>
      <button class="btn-success">   <i class="iconoir-pokeball"></i> Success   </button>

      <button class="btn-round btn-primary">   <i class="iconoir-pokeball"></i></button>
      <button class="btn-round btn-secondary"> <i class="iconoir-pokeball"></i></button>
      <button class="btn-round btn-tertiary">  <i class="iconoir-pokeball"></i></button>
      <button class="btn-round btn-danger">    <i class="iconoir-pokeball"></i></button>
      <button class="btn-round btn-success">   <i class="iconoir-pokeball"></i></button>

      <button class="btn-wide btn-primary">   Primary   (wide) </button>
      <button class="btn-wide btn-secondary"> Secondary (wide) </button>
      <button class="btn-wide btn-tertiary">  Tertiary  (wide) </button>
      <button class="btn-wide btn-danger">    Danger    (wide) </button>
      <button class="btn-wide btn-success">   Success   (wide) </button>
    `,
  },
  "inputs": {
    language: "html",
    content: dedent`
      <form action="#">

        <field>
          <label for="email">Email:</label>
          <field-input>
            <input type="text" id="email" name="email" placeholder="name@domain.com" autocomplete="off" data-1p-ignore></input>
          </field-input>
          <field-help />
        </field>

        <field>
          <label for="password">Password:</label>
          <field-input>
            <input type="password" id="password" name="password" placeholder="******" autocomplete="off" data-1p-ignore></input>
          </field-input>
          <field-help>our eyes are closed</field-help>
        </field>

        <field>
          <label for="icons">Icons:</label>
          <field-input>
            <input type="text" id="icons" name="icons" value="mmm, pretty icons"></input>
            <field-icon-left class="iconoir-search"></field-icon-left>
            <field-icon-right class="iconoir-calendar"></field-icon-right>
          </field-input>
          <field-help>this field has icons</field-help>
        </field>

        <field>
          <label for="choice">Choice:</label>
          <field-input>
            <select id="choice" name="choice" autocomplete="off" data-1p-ignore>
              <option>First choice</option>
              <option>Second choice</option>
              <option>Third choice</option>
            </select>
          </field-input>
          <field-help>choose an option</field-help>
        </field>

        <field>
          <label for="checkbox">Checkbox:</label>
          <field-input class="flex-row" style="align-items:flex-start">
            <input id="checkbox" name="checkbox" type="checkbox"></input>
            <div class="flex flex-col">
              <label for="checkbox">Checkbox label</label>
              <field-help for="checkbox" >This checkbox is perfectly safe</field-help>
            </div>
          </field-input>
        </field>

        <field>
          <label for="description">Description:</label>
          <field-input>
            <textarea id="description" name="description">Blah blah blah...</textarea>
          </field-input>
          <field-help>multi line textarea</field-help>
        </field>

        <field>
          <label for="invalid">Status:</label>
          <field-input>
            <input type="text" id="invalid" name="invalid" value="You have died of dysentery"></input>
          </field-input>
          <field-error>
            <icon class="iconoir-warning-circle-solid"></icon>
            condolences to your family.
          </field-error>
        </field>

        <field>
          <label for="disabled">Disabled:</label>
          <field-input>
            <input type="text" disabled id="disable" name="disabled" value="can't touch this"></input>
          </field-input>
        </field>

        <form-buttons>
          <button class="btn-secondary" type="button">Cancel</button>
          <button class="btn-primary"   type="submit">Submit</button>
        </form-buttons>

      </form>
    `,
  },
  "cards": {
    language: "html",
    content: dedent`
      <card>
        <card-header>
          <card-title>Card Title</card-title>
        </card-header>
        <card-body>
          Your content here
        </card-body>
      </card>
    `,
  },
  "modals": {
    language: "html",
    content: dedent`
      <fx-modal id="example-modal">
        <card>
          <card-header>
            <card-title>Hello World</card-title>
          </card-header>
          <card-body>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
          </card-body>
          <card-buttons>
            <button class="btn-primary min-w-fit" data-modal-close>Done</button>
          </card-buttons>
        </card>
      </fx-modal>

      <!-- use your client side library of choice to trigger the modal .show() method -->
      <a href="#" onclick="document.getElementById('example-modal').show()">show modal</a>
    `,
  }
}

//-------------------------------------------------------------------------------------------------
