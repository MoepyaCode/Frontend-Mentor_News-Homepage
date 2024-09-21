import { useDeviceType } from '@app-hooks'
import MobileTableView from './mobile-table-view'
import Desktop from './desktop'

export default function Navigation() {
    const DeviceType = useDeviceType()
    const Data = [
        'Home',
        'New',
        'Popular',
        'Trending',
        'Categories',
      ]

    return DeviceType === 'mobile' ? <MobileTableView data={Data} /> : <Desktop data={Data} /> 
}
