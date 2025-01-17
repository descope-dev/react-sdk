declare const BUILD_VERSION: string;

// eslint-disable-next-line import/prefer-default-export
export const baseHeaders = {
	'x-descope-sdk-name': 'react',
	'x-descope-sdk-version': BUILD_VERSION
};

// This sdk can be used in SSR apps
export const IS_BROWSER = typeof window !== 'undefined';
