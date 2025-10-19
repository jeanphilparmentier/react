import Content from '../../components/Content/Content'
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme'

export default function Dark() {
  return (
    <div class="dark-side h-screen">
      <ToggleTheme />
      <Content />
    </div>
  )
}
