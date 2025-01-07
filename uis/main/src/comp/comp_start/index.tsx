
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
import BRO_comp_bmboh6 from '../comp_bmboh6'; // b@gen:bmboh6 // type: model, name: user, by: bmboh6
import BRO_comp_bvi5al from '../comp_bvi5al'; // b@gen:bvi5al // type: model, name: user, by: bvi5al
import BRO_comp_bkz0ca from '../comp_bkz0ca'; // b@gen:bkz0ca // type: model, name: testcontact, by: bkz0ca
import BRO_comp_bnx1v9 from '../comp_bnx1v9'; // b@gen:bnx1v9 // type: model, name: testcontact, by: bnx1v9
import BRO_comp_bkr2bj from '../comp_bkr2bj'; // b@gen:bkr2bj // type: model, name: testcontact, by: bkr2bj
import BRO_comp_bh5czr from '../comp_bh5czr'; // b@gen:bh5czr // type: model, name: testcontact, by: bh5czr
import BRO_comp_bg8iq8 from '../comp_bg8iq8'; // b@gen:bg8iq8 // type: model, name: testcontact, by: bg8iq8
import BRO_comp_b8vbhh from '../comp_b8vbhh'; // b@gen:b8vbhh // type: model, name: testcontact, by: b8vbhh
import BRO_comp_b3mlxf from '../comp_b3mlxf'; // b@gen:b3mlxf // type: model, name: user, by: b3mlxf
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
const INFO: T_INFO  = { mid: "", cid: "comp_start", idx: idx, cidx: idx, model_name: "", prop_name: props.pm_pn, op: ""};


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

            <div b-type="page" b-parent="pages" b-id="start" b-findex="a0" name="START" findex="a0"  >
                
            <div b-type="div" b-parent="start" b-id="be5ego" b-findex="a0" className="new-div w-full flex items-center justify-center"  >
                
            <div b-type="div" b-parent="be5ego" b-id="bbixy6" b-findex="a0" name="dropdown-menu" className="p-8 text-[--primary-500]"  >
                
            <style b-type="style" b-parent="bbixy6" b-id="bs65wb" b-findex="a0"  >
                {`details[open] .arrow {
            transform: rotate(180deg);
        }`}
            </style>
        

            <details b-type="details" b-parent="bbixy6" b-id="bd0l8d" b-findex="a1" className="flex items-center gap-2 relative"  >
                
            <summary b-type="summary" b-parent="bd0l8d" b-id="b9epn4" b-findex="a0" className="flex items-center gap-2 border border-[--primary-500] rounded-lg px-2"  >
                
            <span b-type="span" b-parent="b9epn4" b-id="bvkhb7" b-findex="a0"  >
                Sort By
            </span>
        

            <iconify-icon b-type="iconify-icon" b-parent="b9epn4" b-id="buu48u" b-findex="a1" class="arrow" icon="lineicons:chevron-down"  >
                
            </iconify-icon>
        
            </summary>
        

            <div b-type="div" b-parent="bd0l8d" b-id="bqlw1o" b-findex="a1" name="dropdown-menu-content" className="absolute z-[10] right-0 flex flex-col gap-1 border border-[--primary-500] rounded-lg p-2 mt-2 text-nowrap bg-white/95"  >
                
            <div b-type="div" b-parent="bqlw1o" b-id="bvvvrf" b-findex="a0" className="text-lg"  >
                New Arrivals
            </div>
        

            <div b-type="div" b-parent="bqlw1o" b-id="bsnq9l" b-findex="a1" name="dropdown-menu-item" className="hover:underline cursor-pointer"  >
                Item 1
            </div>
        

            <div b-type="div" b-parent="bqlw1o" b-id="bs5ro2" b-findex="a2" name="dropdown-menu-item" className="hover:underline cursor-pointer"  >
                Item 2
            </div>
        

            <div b-type="div" b-parent="bqlw1o" b-id="b23xku" b-findex="a3" name="dropdown-menu-item" className="hover:underline cursor-pointer"  >
                Item 3
            </div>
        
            </div>
        
            </details>
        
            </div>
        
            </div>
        

            <div b-type="div" b-parent="start" b-id="bdl4tv" b-findex="a1" className="new-div w-full flex items-center justify-center"  >
                
			{/* user: get_selected_one  bid:bmboh6 */}
			<BRO_comp_bmboh6 COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        

            <div b-type="div" b-parent="start" b-id="b243xy" b-findex="a1V" className="new-div w-full flex items-center justify-center"  >
                
			{/* user: get_selected_one  bid:bvi5al */}
			<BRO_comp_bvi5al COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        

            <div b-type="div" b-parent="start" b-id="box6ro" b-findex="a2" className="new-div w-full flex items-center justify-center"  >
                
			{/* testcontact: create_one  bid:bkz0ca */}
			<BRO_comp_bkz0ca COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        

            <div b-type="div" b-parent="start" b-id="biinkp" b-findex="a3" className="new-div w-full flex items-center justify-center"  >
                
			{/* testcontact: get_one  bid:bnx1v9 */}
			<BRO_comp_bnx1v9 COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        

            <div b-type="div" b-parent="start" b-id="bkkty5" b-findex="a6" className="new-div w-full flex items-center justify-center"  >
                
			{/* testcontact: get_many  bid:bkr2bj */}
			<BRO_comp_bkr2bj COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        

            <div b-type="div" b-parent="start" b-id="bi1p33" b-findex="a7" className="new-div w-full flex items-center justify-center"  >
                
			{/* testcontact: get_many  bid:bh5czr */}
			<BRO_comp_bh5czr COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        

            <div b-type="div" b-parent="start" b-id="bynh4s" b-findex="a8" className="new-div w-full flex items-center justify-center"  >
                
			{/* testcontact: get_many  bid:bg8iq8 */}
			<BRO_comp_bg8iq8 COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        

            <div b-type="div" b-parent="start" b-id="bvqr7r" b-findex="aA" className="new-div w-full flex items-center justify-center"  >
                
			{/* testcontact: get_many  bid:b8vbhh */}
			<BRO_comp_b8vbhh COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        

            <div b-type="div" b-parent="start" b-id="bvhqnw" b-findex="aB" className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden"  >
                
            <div b-type="div" b-parent="bvhqnw" b-id="bfvuvo" b-findex="a0" className="p-6 border-b border-gray-200"  >
                
            <h1 b-type="h1" b-parent="bfvuvo" b-id="bvkdx3" b-findex="a0" className="text-xl font-semibold text-gray-800"  >
                Analytics Overview
            </h1>
        

            <p b-type="p" b-parent="bfvuvo" b-id="bycooe" b-findex="a1" className="text-sm text-gray-500"  >
                Last updated: Jan 6, 2025
            </p>
        
            </div>
        

            <div b-type="div" b-parent="bvhqnw" b-id="b0oan1" b-findex="a1" className="flex space-x-4 p-4 border-b border-gray-200"  >
                
            <button b-type="button" b-parent="b0oan1" b-id="b18d0u" b-findex="a0" className="text-sm font-medium text-gray-800 border-b-2 border-blue-500 pb-2"  >
                Overview
            </button>
        

            <button b-type="button" b-parent="b0oan1" b-id="ba71jd" b-findex="a1" className="text-sm font-medium text-gray-500 hover:text-gray-800"  >
                Traffic
            </button>
        

            <button b-type="button" b-parent="b0oan1" b-id="bhbx2h" b-findex="a2" className="text-sm font-medium text-gray-500 hover:text-gray-800"  >
                Revenue
            </button>
        
            </div>
        

            <div b-type="div" b-parent="bvhqnw" b-id="brq67g" b-findex="a2" className="p-6"  >
                
            <div b-type="div" b-parent="brq67g" b-id="bqyyct" b-findex="a0" className="mb-6"  >
                
            <h2 b-type="h2" b-parent="bqyyct" b-id="bzva7r" b-findex="a0" className="text-lg font-medium text-gray-700 mb-4"  >
                Traffic Sources
            </h2>
        

            <div b-type="div" b-parent="bqyyct" b-id="beke7f" b-findex="a1" className="bg-gray-50 rounded-lg shadow-sm p-6"  >
                
            <div b-type="div" b-parent="beke7f" b-id="b3sdps" b-findex="a0" className="w-full h-48 bg-blue-100 rounded-md flex items-center justify-center"  >
                
            <p b-type="p" b-parent="b3sdps" b-id="bpn0ja" b-findex="a0" className="text-gray-500"  >
                [Placeholder for Chart]
            </p>
        
            </div>
        
            </div>
        
            </div>
        

            <div b-type="div" b-parent="brq67g" b-id="bpd872" b-findex="a1"  >
                
            <h2 b-type="h2" b-parent="bpd872" b-id="bbbxlr" b-findex="a0" className="text-lg font-medium text-gray-700 mb-4"  >
                Top Pages
            </h2>
        

            <div b-type="div" b-parent="bpd872" b-id="bdp5kn" b-findex="a1" className="overflow-x-auto bg-gray-50 rounded-lg shadow-sm"  >
                
            <table b-type="table" b-parent="bdp5kn" b-id="b0smrf" b-findex="a0" className="w-full text-sm text-left text-gray-700"  >
                
            <thead b-type="thead" b-parent="b0smrf" b-id="bk0jrd" b-findex="a0" className="bg-gray-100 border-b"  >
                
            <tr b-type="tr" b-parent="bk0jrd" b-id="bspu4o" b-findex="a0"  >
                
            <th b-type="th" b-parent="bspu4o" b-id="bwxobf" b-findex="a0" className="py-3 px-4"  >
                Page
            </th>
        

            <th b-type="th" b-parent="bspu4o" b-id="br6g06" b-findex="a1" className="py-3 px-4"  >
                Views
            </th>
        

            <th b-type="th" b-parent="bspu4o" b-id="byu9uf" b-findex="a2" className="py-3 px-4"  >
                Bounce Rate
            </th>
        

            <th b-type="th" b-parent="bspu4o" b-id="br52kb" b-findex="a3" className="py-3 px-4"  >
                Avg. Session
            </th>
        
            </tr>
        
            </thead>
        

            <tbody b-type="tbody" b-parent="b0smrf" b-id="bmgt29" b-findex="a1"  >
                
            <tr b-type="tr" b-parent="bmgt29" b-id="braahg" b-findex="a0" className="border-b hover:bg-gray-100"  >
                
            <td b-type="td" b-parent="braahg" b-id="b65fay" b-findex="a0" className="py-3 px-4"  >
                /home
            </td>
        

            <td b-type="td" b-parent="braahg" b-id="btbped" b-findex="a1" className="py-3 px-4"  >
                4,678
            </td>
        

            <td b-type="td" b-parent="braahg" b-id="bc11au" b-findex="a2" className="py-3 px-4"  >
                45%
            </td>
        

            <td b-type="td" b-parent="braahg" b-id="bs7d8p" b-findex="a3" className="py-3 px-4"  >
                2m 34s
            </td>
        
            </tr>
        

            <tr b-type="tr" b-parent="bmgt29" b-id="betjs9" b-findex="a1" className="border-b hover:bg-gray-100"  >
                
            <td b-type="td" b-parent="betjs9" b-id="bwfhcl" b-findex="a0" className="py-3 px-4"  >
                /products
            </td>
        

            <td b-type="td" b-parent="betjs9" b-id="bdid7i" b-findex="a1" className="py-3 px-4"  >
                3,204
            </td>
        

            <td b-type="td" b-parent="betjs9" b-id="buieew" b-findex="a2" className="py-3 px-4"  >
                52%
            </td>
        

            <td b-type="td" b-parent="betjs9" b-id="b6zf5y" b-findex="a3" className="py-3 px-4"  >
                1m 45s
            </td>
        
            </tr>
        

            <tr b-type="tr" b-parent="bmgt29" b-id="bcp0i9" b-findex="a2" className="border-b hover:bg-gray-100"  >
                
            <td b-type="td" b-parent="bcp0i9" b-id="bwva4w" b-findex="a0" className="py-3 px-4"  >
                /blog
            </td>
        

            <td b-type="td" b-parent="bcp0i9" b-id="bcmpj8" b-findex="a1" className="py-3 px-4"  >
                2,890
            </td>
        

            <td b-type="td" b-parent="bcp0i9" b-id="by0ndg" b-findex="a2" className="py-3 px-4"  >
                38%
            </td>
        

            <td b-type="td" b-parent="bcp0i9" b-id="b3wuhy" b-findex="a3" className="py-3 px-4"  >
                3m 12s
            </td>
        
            </tr>
        
            </tbody>
        
            </table>
        
            </div>
        
            </div>
        
            </div>
        
            </div>
        

            <div b-type="div" b-parent="start" b-id="bhxn72" b-findex="aC" className="flex-1 p-6 space-y-6"  >
                
            <header b-type="header" b-parent="bhxn72" b-id="b5w840" b-findex="a0" className="flex justify-between items-center"  >
                
            <h1 b-type="h1" b-parent="b5w840" b-id="bdh0tl" b-findex="a0" className="text-2xl font-semibold text-gray-800"  >
                Welcome Back!
            </h1>
        

            <div b-type="div" b-parent="b5w840" b-id="b63c9r" b-findex="a1" className="flex items-center space-x-4"  >
                <input b-type="input" b-parent="b63c9r" b-id="b12xbu" b-findex="a0" type="text" placeholder="Search..." className="w-48 px-4 py-2 rounded-lg border border-gray-300" />
<img b-type="img" b-parent="b63c9r" b-id="bzlsur" b-findex="a1" src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
            </div>
        
            </header>
        

            <section b-type="section" b-parent="bhxn72" b-id="bgnz6j" b-findex="a1" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"  >
                
            <div b-type="div" b-parent="bgnz6j" b-id="buaaia" b-findex="a0" className="bg-white p-6 rounded-lg shadow"  >
                
            <h2 b-type="h2" b-parent="buaaia" b-id="bbguim" b-findex="a0" className="text-lg font-semibold text-gray-700"  >
                Total Revenue
            </h2>
        

            <p b-type="p" b-parent="buaaia" b-id="bqt1ua" b-findex="a1" className="text-3xl font-bold text-gray-800"  >
                $24,580
            </p>
        

            <p b-type="p" b-parent="buaaia" b-id="b79i3c" b-findex="a2" className="text-sm text-green-600 mt-2"  >
                +12% since last month
            </p>
        
            </div>
        

            <div b-type="div" b-parent="bgnz6j" b-id="bctz9o" b-findex="a1" className="bg-white p-6 rounded-lg shadow"  >
                
            <h2 b-type="h2" b-parent="bctz9o" b-id="bxtf78" b-findex="a0" className="text-lg font-semibold text-gray-700"  >
                New Users
            </h2>
        

            <p b-type="p" b-parent="bctz9o" b-id="bdg6xk" b-findex="a1" className="text-3xl font-bold text-gray-800"  >
                1,254
            </p>
        

            <p b-type="p" b-parent="bctz9o" b-id="bhjvsa" b-findex="a2" className="text-sm text-red-600 mt-2"  >
                -5% since last week
            </p>
        
            </div>
        

            <div b-type="div" b-parent="bgnz6j" b-id="b0rahn" b-findex="a2" className="bg-white p-6 rounded-lg shadow"  >
                
            <h2 b-type="h2" b-parent="b0rahn" b-id="bl680d" b-findex="a0" className="text-lg font-semibold text-gray-700"  >
                Active Projects
            </h2>
        

            <p b-type="p" b-parent="b0rahn" b-id="bag3br" b-findex="a1" className="text-3xl font-bold text-gray-800"  >
                34
            </p>
        

            <p b-type="p" b-parent="b0rahn" b-id="bltgvv" b-findex="a2" className="text-sm text-green-600 mt-2"  >
                +8% this quarter
            </p>
        
            </div>
        
            </section>
        

            <div b-type="div" b-parent="bhxn72" b-id="bvqf1o" b-findex="a2" className="grid grid-cols-1 lg:grid-cols-3 gap-6"  >
                
            <div b-type="div" b-parent="bvqf1o" b-id="b3xpcn" b-findex="a0" className="lg:col-span-2 bg-white p-6 rounded-lg shadow-[0px_1px_3px_0px_#0000001a]"  >
                
            <h2 b-type="h2" b-parent="b3xpcn" b-id="bmfgzn" b-findex="a0" className="text-lg font-semibold text-gray-700 mb-4"  >
                Traffic Analysis
            </h2>
        

            <div b-type="div" b-parent="b3xpcn" b-id="bq6ftl" b-findex="a1" className="w-full h-64 bg-blue-100 rounded flex items-center justify-center"  >
                
            <p b-type="p" b-parent="bq6ftl" b-id="b8ch6o" b-findex="a0" className="text-gray-500"  >
                [Placeholder for Chart]
            </p>
        
            </div>
        
            </div>
        

            <div b-type="div" b-parent="bvqf1o" b-id="bx8452" b-findex="a1" className="bg-white p-6 rounded-lg shadow-[0px_1px_3px_0px_#0000001a]"  >
                
            <h2 b-type="h2" b-parent="bx8452" b-id="bs0piz" b-findex="a0" className="text-lg font-semibold text-gray-700 mb-4"  >
                Recent Activities
            </h2>
        

            <ul b-type="ul" b-parent="bx8452" b-id="bg5v51" b-findex="a1" className="space-y-4"  >
                
            <li b-type="li" b-parent="bg5v51" b-id="bt9js2" b-findex="a0" className="flex items-center space-x-4"  >
                
            <div b-type="div" b-parent="bt9js2" b-id="bic56b" b-findex="a0" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"  >
                
            <span b-type="span" b-parent="bic56b" b-id="btl9ox" b-findex="a0" className="text-blue-600 font-semibold"  >
                A
            </span>
        
            </div>
        

            <div b-type="div" b-parent="bt9js2" b-id="b7etpl" b-findex="a1"  >
                
            <p b-type="p" b-parent="b7etpl" b-id="bb9azn" b-findex="a0" className="text-sm font-medium text-gray-800"  >
                Alice added a new task
            </p>
        

            <p b-type="p" b-parent="b7etpl" b-id="bk7urh" b-findex="a1" className="text-xs text-gray-500"  >
                5 mins ago
            </p>
        
            </div>
        
            </li>
        

            <li b-type="li" b-parent="bg5v51" b-id="buhtik" b-findex="a1" className="flex items-center space-x-4"  >
                
            <div b-type="div" b-parent="buhtik" b-id="bqlmen" b-findex="a0" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"  >
                
            <span b-type="span" b-parent="bqlmen" b-id="blvvpq" b-findex="a0" className="text-green-600 font-semibold"  >
                J
            </span>
        
            </div>
        

            <div b-type="div" b-parent="buhtik" b-id="bw23nl" b-findex="a1"  >
                
            <p b-type="p" b-parent="bw23nl" b-id="br4d4w" b-findex="a0" className="text-sm font-medium text-gray-800"  >
                John completed a project
            </p>
        

            <p b-type="p" b-parent="bw23nl" b-id="best99" b-findex="a1" className="text-xs text-gray-500"  >
                1 hour ago
            </p>
        
            </div>
        
            </li>
        

            <li b-type="li" b-parent="bg5v51" b-id="b6irin" b-findex="a2" className="flex items-center space-x-4"  >
                
            <div b-type="div" b-parent="b6irin" b-id="bw3zbd" b-findex="a0" className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center"  >
                
            <span b-type="span" b-parent="bw3zbd" b-id="biuq66" b-findex="a0" className="text-red-600 font-semibold"  >
                K
            </span>
        
            </div>
        

            <div b-type="div" b-parent="b6irin" b-id="bclbvo" b-findex="a1"  >
                
            <p b-type="p" b-parent="bclbvo" b-id="bj3u3y" b-findex="a0" className="text-sm font-medium text-gray-800"  >
                Kevin removed a file
            </p>
        

            <p b-type="p" b-parent="bclbvo" b-id="bejimd" b-findex="a1" className="text-xs text-gray-500"  >
                2 hours ago
            </p>
        
            </div>
        
            </li>
        
            </ul>
        
            </div>
        
            </div>
        
            </div>
        

            <div b-type="div" b-parent="start" b-id="bcat3r" b-findex="aD" className="new-div w-full flex items-center justify-center"  >
                
			{/* user: get_many  bid:b3mlxf */}
			<BRO_comp_b3mlxf COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		
            </div>
        
            </div>
        
		</ErrorBoundary>
	)
}

export default observer(COMP_NAME);