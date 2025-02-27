
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

import { subscribe_selected_one } from "@/utils/selected-one";
import { generate_draft_id, generate_query_id } from "@/utils/draft";
import { expose_state } from "@/utils/expose-state";
import fallbackRender from "@/utils/ErrorBoundaryFallback";


import GFN from '../../GFN';
import AS from "../../gfn/AS";
import UTILS from "@/utils/index";
import UTILITY_COMPS from "@/lib/comp/utility";


import {OBJ_WITH_ID, T_INFO, T_QUERY_PARAMS} from "../types";





// INJECT IMPORTS HERE
import BRO_comp_bmr3ee from '../comp_bmr3ee'; // b@gen:bmr3ee // type: model, name: testcontact, by: bmr3ee
// b@imports









const EN_BROKEN_COMP_LOGS = window.EN_BROKEN_COMP_LOGS || {};




// local code - e.g sub components
// b@locals

const BROKEN_JSX = () => <div className="flex items-center justify-center text-gray-500 font-semibold bg-gray-100">DEFAULT GET_MANY </div>






// b@comp-name
const COMP_NAME = (props: any) => {

	// FOR IS_MANY
	let idx = props.idx;   // also for protection from error when we might think is many but it's not
	let V = props.V || {}; // for protection from error

	
	// REPLACE INFO HERE - NEXT LINE after b@
	// b@info
const INFO: T_INFO  = { mid: "zjdfg", cid: "comp_bh5czr", idx: idx, cidx: idx, model_name: "testcontact", prop_name: props.pm_pn, op: "get_many"};

	

	// DYNAMIC VARIABLES & FUNCTIONS
	const B		: any = {}; // contains actions and common functions
	const VARS	: any = {}; // contains variables
	const FNS	: any = {}; // contains functions

	
	// b@freeze



	// STATES
	const [M,  SET_M ] 	= useState(UTILS.GET_MANY_MIDATA({VARS	, props}));		// model initial data
	const [SM, SET_SM]	= useState(UTILS.GET_SM_MIDATA  ({INFO	, props}));		// selected model data

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

	


	// EFFECTS FOR GET_MANY
	useEffect(()=>{
		if(UTILS.DISABLE_INIT({VARS, props}, "gm")) return;

		init();

		return () => {
			if(INITIALIZING.value) return; // don't unsubscribe if initializing. There is a strange react unmount bug happeing
			subs.current.forEach(s=>s.unsubscribe());
		}
	}, []);

	

	// LOGS
	


    // USER DEFINED EFFECTS
    // b@effects





	// FUNCTIONS

	const set_pre = (M: OBJ_WITH_ID[]): OBJ_WITH_ID[] => {
		return M;
	}

	const set_post = (M: OBJ_WITH_ID[]): OBJ_WITH_ID[] => {
		return M;
	}


	// RxJs Subscriptions - to be destroyed on unmount
	const subs = useRef<Subscription[]>([]);
	const INITIALIZING = CS.get("INITIALIZING");

	const init = async () => {
		// DEFAULT GET_MANY INIT
		if(INITIALIZING.value) return; INITIALIZING.set(true); // initialize only once


		CS.setStatus("loading");
		const destroy = await STATE_SUBSCRIBE.gm_init({INFO, subs, idx, VARS, M, SET_M, set_pre, set_post, props, SET_SM});
		CS.setStatus("none");



		INITIALIZING.set(false);

		// IF you want to modify the init function: simply copy the code inside gm_init() and paste it here and modify however you want
		// DON'T modify the code inside gm_init() directly. It's shared by many other get_many comps
		// Instead, copy it to here and modify


		// --- PASTE HERE -- your custom init code

		return destroy;
	}




    // USER DEFINED FUNCTIONS
    // b@functions





	// STATEMENTS
	INFO.SET_M          = SET_M;
	INFO.query		  	= VARS.query
	INFO.on_created     = props.on_created 	|| props.INFO?.on_created;
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
		<ErrorBoundary fallbackRender={fallbackRender} onReset={(d) => { console.error(d) }}>

            <div b-type="model" b-parent="bi1p33" b-id="bh5czr" b-findex="a0" mid="zjdfg" name="testcontact" op="get_many" className="w-full flex flex-col bg-white p-2 rounded shadow-[0px_1px_3px_0px_#0000001a]" comp-temp="get_many"  >
                
            <div b-type="div" b-parent="bh5czr" b-id="btlcm2" b-findex="a0" name="title" className="text-2xl font-medium text-gray-600 text-left"  >
                LIST OF testcontact
            </div>
        

            <div b-type="div" b-parent="bh5czr" b-id="b7qxp5" b-findex="a1" name="testcontact-data" className="flex flex-col gap-2"  >
                
			{/* testcontact: get_one  bid:bmr3ee */}
			
					{GFN.GET_ARRAY(M).map((V, idx)=>(
						<BRO_comp_bmr3ee COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO} M={V} key={V.id} PM_ID={V?.id} PM_IDX={idx} PM_MID={"zjdfg"}  />
					))}
				
		
            </div>
        
            </div>
        
		</ErrorBoundary>
	)
}

export default observer(COMP_NAME);