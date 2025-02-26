declare module "*.png" {
	const value: string;
	export default value;
}

declare module "*.jpg" {
	const value: string;
	export default value;
}

declare module "*.svg" {
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const value: string;
	export default value;
}
