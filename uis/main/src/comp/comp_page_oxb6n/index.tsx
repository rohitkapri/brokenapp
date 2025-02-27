
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
import FallbackRender from "../../utils/ErrorBoundaryFallback";
import { expose_state } from "../../utils/expose-state"; 
import { subscribe_selected_one } from "../../utils/selected-one";

import UTILITY_COMPS from "@/lib/comp/utility";
const Modal = UTILITY_COMPS.Modal;


import GFN from '../../GFN';
import AS from "../../gfn/AS";
import UTILS from "@/utils/index";

import {OBJ_WITH_ID, T_INFO, T_QUERY_PARAMS} from "../types";



// INJECT IMPORTS HERE
// b@imports





// local code - e.g sub components
// b@locals

const BROKEN_JSX = () => <div className="flex items-center justify-center text-gray-500 font-semibold bg-gray-100">DEFAULT GET_ONE </div>






// b@comp-name
const COMP_NAME = (props: any) => {

	// FOR IS_MANY
	let idx = props.idx;   // also for protection from error when we might think is many but it's not
	let V = props.V || {}; // for protection from error
	
	



	// STATES
	const [M,  SET_M ] 					= useState(props.M  || {})	// model data
	const [SM, SET_SM] 					= useState(null);			// selected model data
	
	const [errors,		set_errors]		= useState([]);
	const [warnings,	set_warnings]	= useState([]);

	
	// REPLACE INFO HERE - NEXT LINE after b@
	// b@info
const INFO: T_INFO  = { mid: "", cid: "comp_page_oxb6n", idx: idx, cidx: idx, model_name: "", prop_name: props.pm_pn, op: ""};


	// DYNAMIC VARIABLES & FUNCTIONS
	const B		: any = {}; // contains actions and common functions
	const VARS	: any = {}; // contains variables
	const FNS	: any = {}; // contains functions


    // USER DEFINED STATES
    // b@states

	


    // REFS
    // USER DEFINED REFS
    // b@refs





	// QUERY
	// b@query
	const query:T_QUERY_PARAMS|null = null;


	// RELATION
	// b@relation
	let relation:{model_id: string, comp_id: string, prop_name: string}|null = null;






	// EFFECTS FOR GET_ONE
	useEffect(()=>{
		// select page
		UTILS.select_page_on_init(INFO);


		init();

		return () => {
			// if(INITIALIZING.value) return; // don't unsubscribe if initializing. There is a strange react unmount bug happeing
			subs.current.forEach(s=>s.unsubscribe());
		}
	}, []);




	// SUBS TO SELECTED ONE
	useEffect(()=>subscribe_selected_one(INFO.mid, subs.current, SET_SM), []);

	


	

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

	const init = async ()=>{

		// remove all previous subscriptions
		subs.current.forEach(s=>s.unsubscribe()); subs.current = [];

		
		// NOTHING TO DOWNLOAD IN page.tsx


	}

    // USER DEFINED FUNCTIONS
    // b@functions



	// STATEMENTS
	INFO.SET_M          = SET_M;
	INFO.query		  	= query || undefined;
	INFO.on_created     = props.on_created || props.INFO?.on_created;
	INFO.on_selected    = props.on_selected || props.INFO?.on_selected;

    // USER DEFINED STATEMENTS
    // b@statements




	// CONDITIONALS ATTRS
	const COND_ATTRS = {};
	//b@cond-attrs







	// DYNAMIC REACT STATES
	const REACT_STATES: {[name: string]: {state: any, set_state: any, defaultValue?: any}} = {};
    // b@dynamic-states
    // we are also using REACT_STATES to generate some dynamic state from html <state> tag, or from state attr

	expose_state(REACT_STATES, AS, INFO, "M", M, SET_M);
    // exposing this will help us in getting this data for debuging purpose



	// MAPPED DATA
const MAPPED_DATA = {};
	// b@mapped-data


	// USER CODE - Extra code written by user
	// b@user-code

	// b@user-code-end




	return (
		<ErrorBoundary fallbackRender={FallbackRender} onReset={(d) => { console.error(d) }}>

            <div b-type="page" b-parent="pages" b-id="page_oxb6n" b-findex="a2" name="pageoxb6n"  >
                
            <div b-type="div" b-parent="page_oxb6n" b-id="bsmp33" b-findex="a0"  >
                
            </div>
        
            </div>
        
		</ErrorBoundary>
	)
}

export default observer(COMP_NAME);