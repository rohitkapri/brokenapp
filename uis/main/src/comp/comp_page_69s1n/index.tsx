
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
import BRO_comp_bxlua3 from '../comp_bxlua3'; // b@gen:bxlua3 // type: model, name: user, by: bxlua3
import data from './data.ts';
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
const INFO: T_INFO  = { mid: "", cid: "comp_page_69s1n", idx: idx, cidx: idx, model_name: "", prop_name: props.pm_pn, op: ""};


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

            <div b-type="page" b-parent="pages" b-id="page_69s1n" b-findex="a1" name="second" findex="a1"  >
                
            <div b-type="div" b-parent="page_69s1n" b-id="bw1d7o" b-findex="a0" className="new-div w-full flex items-center justify-center"  >
                
            <div b-type="div" b-parent="bw1d7o" b-id="bscii3" b-findex="a0" name="navbar" className="w-full flex items-center rounded-[16px] bg-white/90 shadow-2xl justify-between backdrop-blur-sm"  >
                
            <div b-type="div" b-parent="bscii3" b-id="br7c9k" b-findex="a0" className="w-full rounded-[16px] px-5 py-4 flex items-center justify-center hover:bg-[--tertiary-100] cursor-pointer gap-1 text-[#616161] flex-col"  >
                
            <iconify-icon b-type="iconify-icon" b-parent="br7c9k" b-id="b2jssc" b-findex="a0" icon="lucide:house" width="64" height="64"  >
                
            </iconify-icon>
        

            <div b-type="div" b-parent="br7c9k" b-id="bydmez" b-findex="a1" className="w-full flex items-center justify-center display-font text-[12px]"  >
                Home
            </div>
        
            </div>
        

            <div b-type="div" b-parent="bscii3" b-id="bezc8y" b-findex="a1" className="w-full rounded-[16px] px-5 py-4 flex items-center justify-center hover:bg-[--tertiary-100] cursor-pointer gap-1 text-[#616161] flex-col"  >
                
            <iconify-icon b-type="iconify-icon" b-parent="bezc8y" b-id="bt549p" b-findex="a0" icon="lucide:heart" width="64" height="64"  >
                
            </iconify-icon>
        

            <div b-type="div" b-parent="bezc8y" b-id="bzk7zr" b-findex="a1" className="w-full flex items-center justify-center display-font text-[12px]"  >
                Favorites
            </div>
        
            </div>
        

            <div b-type="div" b-parent="bscii3" b-id="bru670" b-findex="a2" className="w-full rounded-[16px] px-5 py-4 flex items-center justify-center hover:bg-[--tertiary-100] cursor-pointer gap-1 text-[#616161] flex-col"  >
                
            <iconify-icon b-type="iconify-icon" b-parent="bru670" b-id="b10ubs" b-findex="a0" icon="lucide:binoculars" width="64" height="64"  >
                
            </iconify-icon>
        

            <div b-type="div" b-parent="bru670" b-id="by3uin" b-findex="a1" className="w-full flex items-center justify-center display-font text-[12px]"  >
                Explore
            </div>
        
            </div>
        

            <div b-type="div" b-parent="bscii3" b-id="bmvjmu" b-findex="a3" className="w-full rounded-[16px] px-5 py-4 flex items-center justify-center hover:bg-[--tertiary-100] cursor-pointer gap-1 text-[#616161] flex-col"  >
                
            <iconify-icon b-type="iconify-icon" b-parent="bmvjmu" b-id="b3bwb7" b-findex="a0" icon="lucide:user" width="64" height="64"  >
                
            </iconify-icon>
        

            <div b-type="div" b-parent="bmvjmu" b-id="b8v0sv" b-findex="a1" className="w-full flex items-center justify-center display-font text-[12px]"  >
                Profile
            </div>
        
            </div>
        
            </div>
        
            </div>
        

			{/* user: get_many  bid:bxlua3 */}
			<BRO_comp_bxlua3 COMP_DATAS={INFO.COMP_DATAS||[]} idx={idx} INFO={INFO}  />
		

		{(()=>{
			const DATA = data.bcfk2l.items; const B = data.bcfk2l;
			return (
            <div b-type="div" b-parent="page_69s1n" b-id="bcfk2l" b-findex="a2" className="p-2 border border-gray-300 rounded"  >
                
            <div b-type="div" b-parent="bcfk2l" b-id="bid6ml" b-findex="a0" className="flex flex-col gap-2 items-center justify-center"  >
                
            <div b-type="div" b-parent="bid6ml" b-id="bijqfq" b-findex="a0" className="flex flex-row relative"  >
                
		{(()=>{
			const D = GFN.GET_ARRAY(DATA); ;
			return D.map(
				(V, idx)=>{
					return (
            <div b-type="div" b-parent="bijqfq" b-id="bznazr" b-findex="a0" className="w-[300px] overflow-x-hidden z-[2] p-2 bg-transparent" b-mapid={'bznazr--' + (V.id || idx)} key={V.id || idx} >
                
            <div b-type="div" b-parent="bznazr" b-id="bxlbkz" b-findex="a0" action="select" className={UTILS.cn('w-full cursor-pointer py-2 px-4 rounded shadow-lg rounded-full flex items-center justify-center', {'bg-[--secondary-50]': B.query({V, idx, D, pre: 'b-sel'})})} onClick={async (e) => {
				
				
				
				e = {...e} // fix: e.currentTarget
				await B.select({V, idx, D});
			}} b-mapid={'bznazr--' + (V.id || idx)}  >
                {V.name}
            </div>
        
            </div>
        )
				}
			)
		})()}
	

            <motion.div b-type="motion.div" b-parent="bijqfq" b-id="btahx0" b-findex="a1" className="absolute left-0 top-0 bottom-0 rounded-full bg-[--info-300] w-[300px] z-[1]" initial={false} animate={{x: DATA.findIndex(tab => B.is_selected({V: tab})) * 300}} transition={{ type: 'spring', stiffness: 300, damping: 30 }}  >
                
            </motion.div>
        
            </div>
        

            <div b-type="div" b-parent="bid6ml" b-id="b9ekeo" b-findex="a1" className="border border-gray-300 rounded-xl p-4"  >
                
		{(()=>{
			const D = GFN.GET_ARRAY(DATA); ;
			return D.map(
				(V, idx)=>{
					return (
            <div b-type="div" b-parent="b9ekeo" b-id="b8mdee" b-findex="a0" b-mapid={'b8mdee--' + (V.id || idx)} key={V.id || idx} >
                { B.is_selected({V, idx}) && (<div b-type="div" b-parent="b8mdee" b-id="baty8a" b-findex="a0" b-mapid={'b8mdee--' + (V.id || idx)}  >
                { V?.id === 1 && (<div b-type="div" b-parent="baty8a" b-id="bqtp8i" b-findex="a0" name="TAB-CONT1" b-mapid={'b8mdee--' + (V.id || idx)}  >
                
            <div b-type="div" b-parent="bqtp8i" b-id="bchaa4" b-findex="a0" b-mapid={'b8mdee--' + (V.id || idx)}  >
                ONE: {V.name}
            </div>
        
            </div>) }
{ V?.id === 2 && (<div b-type="div" b-parent="baty8a" b-id="bac054" b-findex="a1" name="TAB-CONT2" b-mapid={'b8mdee--' + (V.id || idx)}  >
                
            <div b-type="div" b-parent="bac054" b-id="bvqafs" b-findex="a0" b-mapid={'b8mdee--' + (V.id || idx)}  >
                TWO : {V.name}
            </div>
        
            </div>) }
{ V?.id === 3 && (<div b-type="div" b-parent="baty8a" b-id="bz4o4u" b-findex="a2" name="TAB-CONT3" b-mapid={'b8mdee--' + (V.id || idx)}  >
                
            <div b-type="div" b-parent="bz4o4u" b-id="bo817i" b-findex="a0" b-mapid={'b8mdee--' + (V.id || idx)}  >
                THREE: {V.name}
            </div>
        
            </div>) }
            </div>) }
            </div>
        )
				}
			)
		})()}
	
            </div>
        
            </div>
        
            </div>
        )
		})()}
	

            <UTILITY_COMPS.Modal b-type="bro-modal" b-parent="page_69s1n" b-id="bpfohy" b-findex="a3"  >
                
            <div b-type="div" b-parent="bpfohy" b-id="bgt4rv" b-findex="a0" className="flex items-center justify-center p-4"  >
                
            <div b-type="div" b-parent="bgt4rv" b-id="bc6fs1" b-findex="a0" className="p-2 bg-[--primary-200] rounded cursor-pointer"  >
                VIEW EMBED
            </div>
        
            </div>
        

            <embed b-type="embed" b-parent="bpfohy" b-id="bxn99e" b-findex="a1" src="https://s28.q4cdn.com/392171258/files/doc_downloads/test.pdf" type="application/pdf" width="100%" height="600px"  >
                
            </embed>
        
            </UTILITY_COMPS.Modal>
        
            </div>
        
		</ErrorBoundary>
	)
}

export default observer(COMP_NAME);