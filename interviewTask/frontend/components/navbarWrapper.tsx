import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
export default function NavWrapper() {
	return (
		<nav className='w-full border-b border-border bg-background px-4 py-2'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<div className='text-lg font-bold'>Messages app </div>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href='/' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Add message
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<Link href='/about' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Messages
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</nav>
	);
}
