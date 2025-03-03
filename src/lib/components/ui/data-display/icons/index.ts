import type { WithoutChildren, WithRef } from '$types';
import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export { default as LoaderCircle } from '$components/ui/data-display/icons/loader-circle.svelte';

export type IconProps = WithoutChildren<
	WithRef<SVGAttributes<SVGElement>, SVGSVGElement>
>;
export type IconComponent = Component<
	IconProps,
	Record<string, unknown>,
	'ref'
>;

export type WithIcon<T> = T & { icon?: IconComponent };
export type WithoutIcon<T> = Omit<T, 'icon'>;
