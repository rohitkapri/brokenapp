import { useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
	Routes,
	Route,
	Link,
	useNavigate,
} from "react-router-dom";

import { 
    motion, 
    AnimatePresence 
} from "framer-motion";

import { Subscription } from "rxjs";
import {observer} from "mobx-react-lite"

// EVERY IMPORT HAS TO BE ../module/file-name
import { subscribe_selected_one } from "@/utils/selected-one";
import { generate_draft_id } from "@/utils/draft";
import { expose_state } from "@/utils/expose-state";
import fallbackRender from "@/utils/ErrorBoundaryFallback";


import GFN from '../../GFN';
import AS from "../../gfn/AS";
import UTILS from "@/utils/index";


import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const BROKEN_JSX = () => <div className="flex items-center justify-center text-gray-500 font-semibold bg-gray-100">DEFAULT GET_ONE </div>



const COMP_NAME = (props: any) => {

	useEffect(() => {
		console.log("Simple comp mounted");
	}, []);

	const onInit = () => {
        console.log('lightGallery has been initialized');
    };


	const [IMAGES, SET_IMAGES] = useState<{url: string, name: string}[]>([]);


	const init = () => {

		const images: any[] = [];
	
	
		const add_image = (image: any) => {
			if(typeof(image) === 'object'){
				if(image.v?.url) images.push(image.v); // for is_many: true
				if(image.url) images.push(image);
			}
			else if(typeof(image) === 'string'){
				images.push({
					url: image,
					name: ""
				});
			}
		}
	
		const add_images = (images: any[]) => {
			if(!Array.isArray(images)) return;
			for(let i of images){
				add_image(i);
			}
		}
	
		
	
		const M = props.M;
		if(M && Array.isArray(M)){
			for(let m of M){
				add_images(m.images);
				add_image(m.image);
			}
		}
		else if(M && typeof(M) === 'object'){
			add_images(M.images);
			add_image(M.image);
		}
	
		// props.images | props.image
		add_images(props.images);
		add_image(props.image);
	
	
		const default_images = [
			{
				name: 'img1',
				url: "https://i.pinimg.com/564x/8b/a2/21/8ba2210fc55e7be9958afeed621e1fe0.jpg"
			},
			{
				name: 'img2',
				url : "https://i.pinimg.com/564x/4d/4d/40/4d4d40b4276522c929a5dcc97358c9a1.jpg"
			}
		]
		if(!images.length){
			images.push(...default_images);
		}

		SET_IMAGES(images);
	}


	useEffect(() => {
		init();
	}, [props.M, props.images, props.image]);
	return (
		<BROKEN_JSX />
	)
}

export default observer(COMP_NAME);