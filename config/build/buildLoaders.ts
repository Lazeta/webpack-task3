import type { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import loader from 'mini-css-extract-plugin/types/loader';
import React from 'react';
import { buildBabelLoader } from './babel/buildBabelLoader';

export function buildLoaders(options: BuildOptions) : ModuleOptions['rules' ] {
    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    };

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack', 
                options: {icon: true}}],
    };

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            },
        },
    };                 

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use:[ isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {loader: 'css-loader', 
                options: {
                    modules: true,
                },
            },
            'sass-loader'],
    };
    // const tsLoader =  {   
    //     test: /\.tsx?$/,
    //     exclude: /node_modules/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: { 
    //                 transpileOnly: isDev, 
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
    //                 }),
    //             }
    //         }
    //     ],
    // };

    const babelLoader = buildBabelLoader(options);

    return [scssLoader,/* tsLoader*/, assetLoader, svgrLoader, babelLoader];
}

