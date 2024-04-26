
import buttonsTemplate from "./buttonsTemplate.js"
import textTemplate from "./textTemplate.js"

export default {

    components: { buttonsTemplate, textTemplate },

    template: `
    <div>
    <strong>Aquí van mis componentes hijos</strong>
    <buttonsTemplate></buttonsTemplate>
    </div>
    <div>
    <textTemplate></textTemplate>
    </div>
    `
  
}
