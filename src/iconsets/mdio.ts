import { h } from 'vue'
import type { IconSet, IconAliases, IconProps } from 'vuetify'
import { aliases as mdAliases, md } from 'vuetify/iconsets/md'

// Define icon aliases, mapping short names to icon names
const aliases: IconAliases = {
  ...mdAliases,
  purple: 'md-check-circle',
}

const mdComponent = md.component as (props: IconProps) => ReturnType<typeof h>

// Create custom icon set
const mdio: IconSet = {
  component: (props: IconProps) =>
    h(mdComponent, {
      ...props,
      class: props.icon ? `material-symbols-outlined` : '', // You can add more logic for custom handling
    }),
}

console.log('Custom icon set loaded', aliases, mdio)
export { aliases, mdio }
