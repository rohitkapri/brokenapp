
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
import FallbackRender from "../../utils/ErrorBoundaryFallback";
import { expose_state } from "../../utils/expose-state"; 
import { subscribe_selected_one } from "../../utils/selected-one";


import GFN from '../../GFN';
import AS from "../../gfn/AS";
import UTILS from "@/utils/index";
import UTILITY_COMPS from "@/lib/comp/utility";
const Modal = UTILITY_COMPS.Modal;


import {OBJ_WITH_ID, T_INFO, T_QUERY_PARAMS} from "../types";



// INJECT IMPORTS HERE
// b@imports








const EN_BROKEN_COMP_LOGS = window.EN_BROKEN_COMP_LOGS || {};




// local code - e.g sub components
// b@locals

const BROKEN_JSX = () => <div className="flex items-center justify-center text-gray-500 font-semibold bg-gray-100">DEFAULT GET_ONE </div>






// b@comp-name
const COMP_NAME = (props: any) => {

	// FOR IS_MANY
	let idx = props.idx;   // also for protection from error when we might think is many but it's not
	let V = props.V || {}; // for protection from error

	
	// REPLACE INFO HERE - NEXT LINE after b@
	// b@info
const INFO: T_INFO  = { mid: "zjdfg", cid: "comp_bnx1v9", idx: idx, cidx: idx, model_name: "testcontact", prop_name: props.pm_pn, op: "get_one"};


	// DYNAMIC VARIABLES & FUNCTIONS
	const B		: any = {}; // contains actions and common functions
	const VARS	: any = {}; // contains variables
	const FNS	: any = {}; // contains functions
	

	
	// b@freeze



	// STATES
	const [M,  SET_M ] 	= useState(UTILS.GET_ONE_MIDATA({VARS	, props}));		// model initial data
	const [SM, SET_SM]	= useState(UTILS.GET_SM_MIDATA ({INFO	, props}));		// selected model data

	
	const CS = UTILS.GET_STATE(INFO, "COMP")		// local state 	- only for this comp
	const GS = AS.GSTORE.GLOBAL_STATE				// global state - shared  but only with this client in this frontend
	const SS = AS.GSTORE.SERVER_STATES				// server state - shared with evryone using this app


	
	
	
	

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




	// EFFECTS FOR GET_ONE
	useEffect(()=>{
		if(UTILS.DISABLE_INIT({VARS, props}, "go")) return;
		
		init();

		return () => {
			if(INITIALIZING.value) return; // don't unsubscribe if initializing. There is a strange react unmount bug happeing
			subs.current.forEach(s=>s.unsubscribe());
		}
	}, []);
	

	// FROM PARENT
	useEffect(()=>{
		// on prop change: update - @noet: any changes in the props this will reset M 
		const MIDATA = UTILS.GET_ONE_MIDATA({VARS, props});
		if(MIDATA) SET_M(MIDATA);
		if(UTILS.DISABLE_INIT({VARS, props}, "go")) return;

		init();
	},[props]);



	// @BRO:LIBS:LOGGER--PROP-CHANGED

	// @BRO:LIBS:LOGGER




	

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

	const init = async ()=>{
		// DEFAULT GET_ONE INIT
		if(INITIALIZING.value) return; INITIALIZING.set(true); // initialize only once

		CS.setStatus("loading");
		const destroy = await STATE_SUBSCRIBE.go_init({INFO, subs, idx, VARS, M, SET_M, set_pre, set_post, props, SET_SM});
		CS.setStatus("none");

		INITIALIZING.set(false);

		// IF you want to modify the init function: simply copy the code inside go_init() and paste it here and modify however you want
		// DON'T modify the code inside go_init() directly. It's shared by many other get_one comps
		// Instead, copy it to here and modify


		// --- PASTE HERE -- your custom init code

		return destroy;
	}

    // USER DEFINED FUNCTIONS
    // b@functions



	// STATEMENTS
	// @todo: @BRO:LIBS:<======>STATEMENTS--INFO     We could use the LIBS  
	INFO.SET_M          = SET_M;
	INFO.query		  	= VARS.query
	INFO.on_created     = props.on_created || props.INFO?.on_created;
	INFO.on_selected    = props.on_selected || props.INFO?.on_selected;
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
		<ErrorBoundary fallbackRender={FallbackRender} onReset={(d) => { console.error(d) }}>

            <div b-type="model" b-parent="biinkp" b-id="bnx1v9" b-findex="a0" mid="zjdfg" name="testcontact" op="get_one" eid={M.id} className="w-full flex flex-col p-4 border rounded border-zinc-200 relative" comp-temp="get_one"  >
                
            <div b-type="div" b-parent="bnx1v9" b-id="b20oys" b-findex="a0" name="title" className="text-2xl font-medium text-gray-600 text-left pb-6"  >
                GET ONE OF testcontact
            </div>
        

            <div b-type="div" b-parent="bnx1v9" b-id="b38knu" b-findex="a1" name="testcontact-data" className="flex flex-col gap-4" action="select-one" mid="zjdfg" onClick={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await GFN.bro_select_one(e, M, INFO, props, idx);
			}}  >
                
            <div b-type="cont" b-parent="b38knu" b-id="bhjzel" b-findex="a0" name="CONT-services" className="w-full"  >
                
            <div b-type="div" b-parent="bhjzel" b-id="bm35sr" b-findex="a0" className="block text-gray-700 text-sm font-medium mb-2 capitalize"  >
                services
            </div>
        

            <div b-type="prop" b-parent="bhjzel" b-id="bcv4nr" b-findex="a1" name="services" className="flex flex-col  w-full gap-6"  >
                
		{(()=>{
			const D = GFN.GET_ARRAY(GFN.GET(M, ["services"])); ;
			return D.map(
				(V, idx)=>{
					return (
            <div b-type="div" b-parent="bcv4nr" b-id="btosj2" b-findex="a0" b-mapid={'btosj2--' + (V.id || idx)} key={V.id || idx} >
                {V || ''}
            </div>
        )
				}
			)
		})()}
	
            </div>
        
            </div>
        

            <div b-type="cont" b-parent="b38knu" b-id="bjz0u9" b-findex="a1" name="CONT-image" className="w-full"  >
                
            <div b-type="div" b-parent="bjz0u9" b-id="bm2k6u" b-findex="a0" className="block text-gray-700 text-sm font-medium mb-2 capitalize"  >
                image
            </div>
        

            <div b-type="prop" b-parent="bjz0u9" b-id="b76md3" b-findex="a1" name="image" className="flex flex-col w-full gap-6"  >
                
            <div b-type="div" b-parent="b76md3" b-id="bokck3" b-findex="a0" name="image" style={{backgroundImage:`url(${M.image?.url})`}} className="w-32 h-32  flex flex-shrink-0 bg-no-repeat bg-gray-200 bg-center bg-cover rounded-md"  >
                
            </div>
        
            </div>
        
            </div>
        

            <div b-type="cont" b-parent="b38knu" b-id="bjjsk6" b-findex="a2" name="CONT-name" className="w-full"  >
                
            <div b-type="div" b-parent="bjjsk6" b-id="b0frhr" b-findex="a0" className="block text-gray-700 text-sm font-medium mb-2 capitalize"  >
                name
            </div>
        

            <div b-type="prop" b-parent="bjjsk6" b-id="bp1emd" b-findex="a1" name="name" className="flex flex-col  w-full gap-6"  >
                
            <span b-type="span" b-parent="bp1emd" b-id="bo0zjw" b-findex="a0"  >
                {M.name || ''}
            </span>
        
            </div>
        
            </div>
        
            </div>
        

            <div b-type="div" b-parent="bnx1v9" b-id="b1xxrq" b-findex="a2" className="absolute right-2 top-2"  >
                
            <button b-type="button" b-parent="b1xxrq" b-id="bbsthn" b-findex="a0" op="delete_one" className="bg-[var(--error-400)] hover:bg-[var(--error-600)] rounded-md text-white hover:scale-110 w-5 h-5 flex justify-center items-center cursor-pointer transition-all ease-in-out" onClick={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await GFN.bro_delete_one(e, M, INFO, props, idx);
			}} mid="zjdfg"  >
                
            <svg b-type="svg" b-parent="bbsthn" b-id="bnu7lx" b-findex="a0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  >
                <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
            </svg>
        
            </button>
        
            </div>
        
            </div>
        
		</ErrorBoundary>
	)
}

export default observer(COMP_NAME);