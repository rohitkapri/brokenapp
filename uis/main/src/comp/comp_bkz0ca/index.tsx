
/**
 * THIS IS GENERATED CODE. Do not edit it. It will be overwritten when you generate the component again.
 * 
 * 
 * MIT License
 * Copyright (c) 2024 Broken Atom
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

import { useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {observer} from "mobx-react-lite"

// @BRO:META:SECTION-IMPORT-COMMON:START
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
// @BRO:META:SECTION-IMPORT-COMMON:START

import { Subscription } from "rxjs";
import STATE_SUBSCRIBE from "@/state/subscribe";


// EVERY IMPORT HAS TO BE ../module/file-name



import GFN from '../../GFN';
import AS from "../../gfn/AS";
import UTILS from "@/utils/index";
import UTILITY_COMPS from "@/lib/comp/utility";


import {OBJ_WITH_ID, T_INFO, T_QUERY_PARAMS} from "../types";
import { subscribe_selected_one } from "../../utils/selected-one";
import fallbackRender from "../../utils/ErrorBoundaryFallback";
import { validate } from "@/gfn/create";




// INJECT IMPORTS HERE
// b@imports









const EN_BROKEN_COMP_LOGS = window.EN_BROKEN_COMP_LOGS || {};




// local code - e.g sub components
// b@locals

const BROKEN_JSX = () => <div className="flex items-center justify-center text-gray-500 font-semibold bg-gray-100">DEFAULT CREATE_ONE </div>






// b@comp-name
const COMP_NAME = (props: any) => {


	// FOR IS_MANY
	let idx = props.idx;   // also for protection from error when we might think is many but it's not
	let V = props.V || {}; // for protection from error

	// REPLACE INFO HERE - NEXT LINE after b@
	// b@info
const INFO: T_INFO  = { mid: "zjdfg", cid: "comp_bkz0ca", idx: idx, cidx: idx, model_name: "testcontact", prop_name: props.pm_pn, op: "create_one"};



	// DYNAMIC VARIABLES & FUNCTIONS
	const B		: any = {}; // contains actions and common functions
	const VARS	: any = {}; // contains variables
	const FNS	: any = {}; // contains functions

	// STATES
	const [M,  SET_M ] 					= useState(props.M  || {})	// model data
	const [SM, SET_SM] 					= useState(UTILS.GET_SM_MIDATA ({INFO	, props}));			// selected model data
	
	const CS = UTILS.GET_STATE(INFO, "COMP")		// local state 	- only for this comp
	const GS = AS.GSTORE.GLOBAL_STATE				// global state - shared  but only with this client in this frontend
	const SS = AS.GSTORE.SERVER_STATES				// server state - shared with evryone using this app


	
	const[show_relation_selector, set_show_relation_selector] = useState(false);
	
	


    // USER DEFINED STATES
    // b@states



    // REFS
    // USER DEFINED REFS
    // b@refs


	// BRO DATA - with jsoncode - after states, INFO and before query
	// b@bro-data


	// QUERY
	// b@query


	// RELATION
	// b@relation





	// EFFECTS FOR CREATE_ONE
	useEffect(()=>{
		init();

		return () => {
			if(INITIALIZING.value) return; // don't unsubscribe if initializing. There is a strange react unmount bug happeing
			subs.current.forEach(sub=>sub.unsubscribe());
		}
	},[]);


	useEffect(() => {
		//when the draft changes checking the validation of the data provided
		const is_valid = validate(INFO, INFO.mid);
		if(!is_valid.success) {
			console.error('validation failed',is_valid.errors.join(' '));
			CS.setStatus("validate-failed");
			return;
		}
		CS.setStatus("validated");
	},[M])
	

	

    // USER DEFINED EFFECTS
    // b@effects



	// FUNCTIONS

	const set_pre = (M: OBJ_WITH_ID): OBJ_WITH_ID => {
		return M;
	}

	const set_post = (M: OBJ_WITH_ID): OBJ_WITH_ID => {
		return M;
	}


	// RxJs Subscriptions - to be destroyed on unmount
	const subs = useRef<Subscription[]>([]);
	const INITIALIZING = CS.get("INITIALIZING");

	const init = async () => {
		// DEFAULT GET_ONE INIT
		 if(INITIALIZING.value) return; INITIALIZING.set(true); // initialize only once

		CS.setStatus("loading");
		const destroy = await STATE_SUBSCRIBE.co_init({INFO, subs, VARS, M, SET_M, set_pre, set_post, props, SET_SM});
		CS.setStatus("none");

		INITIALIZING.set(false);

		// IF you want to modify the init function: simply copy the code inside co_init() and paste it here and modify however you want
		// DON'T modify the code inside co_init() directly. It's shared by many other create_one comps
		// Instead, copy it to here and modify


		// --- PASTE HERE -- your custom init code

		return destroy;
	
	}


	const on_relation_created = (prop_name:string, data:OBJ_WITH_ID, idx?:number) => {

		STATE_SUBSCRIBE.co_on_relation_created({VARS, prop_name, data, idx, INFO, set_show_relation_selector});
	
		// IF you want to modify this fn copy the code inside on_relation_created() and paste it here and modify however you want
	}

	const on_relation_selected = (prop_name:string, data:OBJ_WITH_ID, idx?:number) => {
		STATE_SUBSCRIBE.co_on_relation_selected({VARS, prop_name, data, idx, INFO, set_show_relation_selector});

		// IF you want to modify this fn copy the code inside on_relation_selected() and paste it here and modify however you want
	}

    // USER DEFINED FUNCTIONS
    // b@functions



	// STATEMENTS
	INFO.SET_M          = SET_M;

	// data from parent component. will be passed to child component after appending current component data
	INFO.COMP_DATAS 	= STATE_SUBSCRIBE.gen_comp_datas({INFO, props, idx});
	
	INFO.query		  	= VARS.query
	INFO.on_created     = on_relation_created || props.on_created || props.INFO?.on_created;
	INFO.on_selected    = on_relation_selected || props.on_selected || props.INFO?.on_selected;
	INFO.prop_name      = props.prop_name || props.PM_PN || props.INFO?.prop_name; // inheritance







    // USER DEFINED STATEMENTS
    // b@statements




	// CONDITIONALS ATTRS
	const COND_ATTRS = {};
	//b@cond-attrs




	// MAPPED DATA
const MAPPED_DATA = {};
	// b@mapped-data





	// USER CODE - Extra code written by user
	// b@user-code

	// b@user-code-end


	
	// USER ACCESS - Wheather USER has access to this component - put this at last because we might want to (return null) here
	// b@user-access

	return (
		<ErrorBoundary fallbackRender={fallbackRender} onReset={(d) => { console.error(d) }}>

            <div b-type="model" b-parent="box6ro" b-id="bkz0ca" b-findex="a0" mid="zjdfg" name="testcontact" op="create_one" className="w-full flex flex-col bg-white p-2 rounded shadow" comp-temp="create_one"  >
                
            <div b-type="div" b-parent="bkz0ca" b-id="bo4t4p" b-findex="a0" name="title" className="text-2xl font-medium text-gray-600 text-left"  >
                CREATE ONE OF testcontact
            </div>
        

            <div b-type="div" b-parent="bkz0ca" b-id="buw0q2" b-findex="a1" name="testcontact-data" className="flex flex-col gap-4 p-4"  >
                
            <div b-type="cont" b-parent="buw0q2" b-id="bnryor" b-findex="a0" name="CONT-services" className="flex flex-col gap-1.5"  >
                
            <label b-type="label" b-parent="bnryor" b-id="bhjjw3" b-findex="a0" className="text-sm font-medium text-gray-800" htmlFor="services"  >
                services
            </label>
        

            <div b-type="prop" b-parent="bnryor" b-id="bix4nb" b-findex="a1" ref-id="many_of--co--checklist" name="services" className="w-full"  >
                
            <div b-type="div" b-parent="bix4nb" b-id="br0zai" b-findex="a0" name="services" type="select-many" action="oninput-update-m-select-many" className="flex gap-3 items-center justify-start" mid="zjdfg" onChange={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await GFN.bro_on_input_select_many(e, M, INFO, props, idx);
			}}  >
                
		{(()=>{
			const D = GFN.GET_ARRAY(GFN.MODELFN.options(INFO.mid, 'services')); ;
			return D.map(
				(V, idx)=>{
					return (
            <div b-type="div" b-parent="br0zai" b-id="bsfgst" b-findex="a0" b-mapid={'bsfgst--' + (V.id || idx)} key={V.id || idx} >
                
            <label b-type="label" b-parent="bsfgst" b-id="b5198e" b-findex="a0" className="inline-flex cursor-pointer items-center label gap-2" b-mapid={'bsfgst--' + (V.id || idx)}  >
                <input b-type="input" b-parent="b5198e" b-id="bpup9b" b-findex="a0" name={'services' + idx} type="checkbox" value={V.id} className="size-5 rounded border-gray-300 bg-gray-100 text-violet-600 accent-violet-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-violet-500" b-mapid={'bsfgst--' + (V.id || idx)} />

            <span b-type="span" b-parent="b5198e" b-id="bgid4h" b-findex="a1" className="text-sm font-medium text-gray-800" b-mapid={'bsfgst--' + (V.id || idx)}  >
                {V.name || V.id}
            </span>
        
            </label>
        
            </div>
        )
				}
			)
		})()}
	
            </div>
        
            </div>
        
            </div>
        

            <div b-type="cont" b-parent="buw0q2" b-id="b1ndgc" b-findex="a1" name="CONT-image" className="flex flex-col gap-1.5"  >
                
            <label b-type="label" b-parent="b1ndgc" b-id="b01fay" b-findex="a0" className="text-sm font-medium text-gray-800" htmlFor="image"  >
                image
            </label>
        

            <div b-type="prop" b-parent="b1ndgc" b-id="b5o6ts" b-findex="a1" ref-id="image--co--dnd" name="image" className="w-full flex flex-col md:flex-row items-center justify-center  gap-4"  >
                
            <div b-type="div" b-parent="b5o6ts" b-id="be7721" b-findex="a0" className="flex flex-col gap-1.5"  >
                
            <p b-type="p" b-parent="be7721" b-id="b6jnv9" b-findex="a0" className="label"  >
                Select an image
            </p>
        
{ !M.__meta?.props?.image?.progress && (<label b-type="label" b-parent="be7721" b-id="b7k68g" b-findex="a1" htmlFor="zjdfg-image-dropzone-image-create" className="flex cursor-pointer w-full min-h-32 flex-col items-center justify-center rounded-md border border-dashed border-gray-400 bg-gray-100 hover:bg-gray-200"  >
                
            <div b-type="div" b-parent="b7k68g" b-id="b44pbf" b-findex="a0" className="flex flex-col items-center justify-center px-6 py-5"  >
                
            <svg b-type="svg" b-parent="b44pbf" b-id="budjim" b-findex="a0" className="mb-4 h-8 w-8 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"  >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"></path>
            </svg>
        

            <p b-type="p" b-parent="b44pbf" b-id="brek4n" b-findex="a1" className="pb-1"  >
                
            <span b-type="span" b-parent="brek4n" b-id="b5uaug" b-findex="a0" className="font-semibold"  >
                Click to upload
            </span>
        
            </p>
        

            <p b-type="p" b-parent="b44pbf" b-id="bff9qr" b-findex="a2" className="helper-text"  >
                SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
        
            </div>
        
<input b-type="input" b-parent="b7k68g" b-id="bkrhxu" b-findex="a1" id="zjdfg-image-dropzone-image-create" name="image" type="file" action="oninput-update-m-file" className="hidden" mid="zjdfg" onInput={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await GFN.bro_on_input_file(e, M, INFO, props, idx);
			}} />
            </label>) }
{ M?.__meta?.props?.image?.progress === 'uploading' && (<div b-type="div" b-parent="be7721" b-id="b5u79s" b-findex="a2" className="flex cursor-pointer flex-col items-center justify-center w-full min-h-32  rounded-md border border-dashed border-gray-400 bg-gray-100 hover:bg-gray-200"  >
                
            <div b-type="div" b-parent="b5u79s" b-id="bzih2i" b-findex="a0" className="flex flex-col items-center justify-center px-6 py-5 gap-[10px]"  >
                
            <iconify-icon b-type="iconify-icon" b-parent="bzih2i" b-id="btstju" b-findex="a0" icon="line-md:loading-twotone-loop" width="24" height="24"  >
                
            </iconify-icon>
        

            <p b-type="p" b-parent="bzih2i" b-id="b9c4d1" b-findex="a1" className="pb-1"  >
                Uploading
            </p>
        
            </div>
        
            </div>) }
{ M?.__meta?.props?.image?.progress === 'done' && (<div b-type="div" b-parent="be7721" b-id="bf7grj" b-findex="a3" className="flex cursor-pointer flex-col items-center justify-center w-full min-h-32  rounded-md border border-dashed border-gray-400 bg-gray-100 hover:bg-gray-200"  >
                
            <div b-type="div" b-parent="bf7grj" b-id="brw796" b-findex="a0" className="flex items-center justify-center px-6 py-5 gap-[10px]"  >
                { M?.image?.url && (<div b-type="div" b-parent="brw796" b-id="bclg6d" b-findex="a0" name="image" style={{backgroundImage:`url(${M.image?.url})`}} className="w-32 h-32 flex flex-shrink-0 bg-no-repeat bg-gray-200 bg-center bg-cover rounded-md"  >
                
            </div>) }

            <div b-type="div" b-parent="brw796" b-id="bxhvvn" b-findex="a1" className="text-[#363636] truncate"  >
                {M.image?.name}
            </div>
        

            <label b-type="label" b-parent="brw796" b-id="bb6ihj" b-findex="a2" htmlFor="zjdfg-image-dropzone-image-create"  >
                
            <div b-type="div" b-parent="bb6ihj" b-id="b8htxd" b-findex="a0" className="rounded p-2 bg-[#FFCAC9]"  >
                Change File
            </div>
        
<input b-type="input" b-parent="bb6ihj" b-id="b3dz0q" b-findex="a1" id="zjdfg-image-dropzone-image-create" name="image" type="file" action="oninput-update-m-file" className="hidden" mid="zjdfg" onInput={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await GFN.bro_on_input_file(e, M, INFO, props, idx);
			}} />
            </label>
        
            </div>
        
            </div>) }
            </div>
        

            <div b-type="div" b-parent="b5o6ts" b-id="b0xle1" b-findex="a1" className="font-bold text-lg"  >
                Or
            </div>
        

            <div b-type="div" b-parent="b5o6ts" b-id="bpeqix" b-findex="a2" className="flex flex-col gap-1.5"  >
                
            <p b-type="p" b-parent="bpeqix" b-id="bph7ce" b-findex="a0" className="label"  >
                Paste an image URL
            </p>
        
{ M?.image?.url && (<div b-type="div" b-parent="bpeqix" b-id="b089g1" b-findex="a1" name="image" style={{backgroundImage:`url(${M.image?.url})`}} className="w-32 h-32 flex flex-shrink-0 bg-no-repeat bg-gray-200 bg-center bg-cover rounded-md"  >
                
            </div>) }
<input b-type="input" b-parent="bpeqix" b-id="bpyyov" b-findex="a2" name="image" value={M.image?.url} type="text" action="oninput-update-m-file" className="w-full rounded-md border border-[#CBD5E1] bg-white px-3 py-2 leading-6 transition-all selection:bg-violet-400 selection:text-white placeholder:text-base placeholder:font-normal placeholder:text-gray-400 hover:border-gray-400 focus:border-gray-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-600" mid="zjdfg" onInput={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await GFN.bro_on_input_file(e, M, INFO, props, idx);
			}} />
            </div>
        
            </div>
        
            </div>
        

            <div b-type="cont" b-parent="buw0q2" b-id="b2qmhi" b-findex="a2" name="CONT-name" className="flex flex-col gap-1.5"  >
                
            <label b-type="label" b-parent="b2qmhi" b-id="bmy8ud" b-findex="a0" className="text-sm font-medium text-gray-800" htmlFor="name"  >
                name
            </label>
        

            <div b-type="prop" b-parent="b2qmhi" b-id="bzv3qg" b-findex="a1" ref-id="text--co" name="name" className="w-full"  >
                <input b-type="input" b-parent="bzv3qg" b-id="b08hj3" b-findex="a0" name="name" id="name" type="text" placeholder="name" action="oninput-update-m" className="w-full rounded-md border border-[#CBD5E1] bg-white px-3 py-2 leading-6 transition-all selection:bg-violet-400 selection:text-white placeholder:text-base placeholder:font-normal placeholder:text-gray-400 hover:border-gray-400 focus:border-gray-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-600" mid="zjdfg" onInput={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await GFN.bro_on_input(e, M, INFO, props, idx);
			}} />
            </div>
        
            </div>
        
            </div>
        

            <div b-type="div" b-parent="bkz0ca" b-id="b12igo" b-findex="a2" className="flex-row flex justify-end items-end pt-5 gap-4"  >
                { CS?.status !== 'validate-failed' && (<button b-type="button" b-parent="b12igo" b-id="boo5lw" b-findex="a0" op="create_one" className="bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white font-medium py-2 px-6 rounded-xl focus:outline-none w-fit text-sm" onClick={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await GFN.bro_create_one(e, M, INFO, props, idx);
			}} mid="zjdfg"  >
                CREATE
            </button>) }
            </div>
        
            </div>
        
		</ErrorBoundary>
	)
}

export default observer(COMP_NAME);