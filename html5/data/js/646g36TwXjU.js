window.globalProvideData('slide', '{"title":"Drag and Drop","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"646g36TwXjU","actionGroups":{"ReviewInt_5vEWosSUXYh":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"62miJBeS5ET"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6VCEigcOVqJ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VmpLEgBvYn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6AKDnGesCNQ"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5z9tD57CDvj.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5vEWosSUXYh_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5vEWosSUXYh_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5vEWosSUXYh","typea":"var","valueb":"6fZqvp2AnBD","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6fZqvp2AnBD.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5vEWosSUXYh"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6fZqvp2AnBD.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5vEWosSUXYh"}]}]}]},"ReviewIntCorrectIncorrect_5vEWosSUXYh":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"62miJBeS5ET"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6VCEigcOVqJ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VmpLEgBvYn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6AKDnGesCNQ"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5vEWosSUXYh":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5vEWosSUXYh"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5vEWosSUXYh":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"62miJBeS5ET"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6VCEigcOVqJ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VmpLEgBvYn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6AKDnGesCNQ"},"enabled":{"type":"boolean","value":false}}]},"5vEWosSUXYh_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5z9tD57CDvj.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6fZqvp2AnBD.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5vEWosSUXYh"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5z9tD57CDvj.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5z9tD57CDvj.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5vEWosSUXYh"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_646g36TwXjU":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6Dkm8x3ZDRm"}}]},"NavigationRestrictionPreviousSlide_646g36TwXjU":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ikrWjhOfQ6","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ikrWjhOfQ6","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5vEWosSUXYh","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5vEWosSUXYh"}],"elseActions":[{"kind":"exe_actiongroup","id":"5vEWosSUXYh_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5vEWosSUXYh","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5vEWosSUXYh","typea":"var","valueb":"6fZqvp2AnBD","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6fZqvp2AnBD"},"completed_slide_ref":{"type":"string","value":"_player.628ugUy7RgU.6biFE2LOb4L"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5vEWosSUXYh","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5vEWosSUXYh","typea":"var","valueb":"6fZqvp2AnBD","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6fZqvp2AnBD"},"completed_slide_ref":{"type":"string","value":"_player.628ugUy7RgU.6biFE2LOb4L"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_646g36TwXjU"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_646g36TwXjU"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":99,"id":"63hwAHnL0Ve"},{"kind":"audio","assetId":100,"id":"5iQcmc0RiBX"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bFpkw4q6Z1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5h8mEMibKfn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xpZTJ32MCO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LlKqOYA5Ma"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6AKDnGesCNQ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62miJBeS5ET"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VCEigcOVqJ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62PMzuHPNx7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VmpLEgBvYn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"60oyjOo6MVy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JtZWqEhbDW"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bvkFIZwIQd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Na07wZ3GNq"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":81,"id":"01","url":"story_content/5fr6dolk46O_80_DX2560_DY2560.swf","type":"normal","altText":"1280x720piksel (2).png","width":1280,"height":720,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":360,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1280,"bottom":720,"altText":"1280x720piksel (2).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1280,"height":720,"strokewidth":0}},"width":1280,"height":720,"resume":true,"useHandCursor":true,"id":"5bFpkw4q6Z1"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":91,"id":"01","url":"story_content/5lwpCuzY1MB_80_B8_C80_Q2262626_P_0_216_1080_648_DX454_DY454.swf","type":"normal","altText":"3.png","width":1080,"height":648,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":872,"yPos":224,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":113.5,"rotateYPos":68,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":113,"snapy":68,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5vEWosSUXYh"],"dragoverids":["_drop_5vEWosSUXYh"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":227,"bottom":136,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":56}},"html5data":{"xPos":0,"yPos":0,"width":227,"height":136,"strokewidth":0}},"width":227,"height":136,"resume":true,"useHandCursor":true,"id":"5h8mEMibKfn"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":92,"id":"01","url":"story_content/6lW781kYV2B_80_B8_C80_Q2262626_P_0_168_1080_792_DX480_DY480.swf","type":"normal","altText":"5.png","width":1080,"height":792,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":632,"yPos":192,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":120,"rotateYPos":88,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":120,"snapy":88,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5vEWosSUXYh"],"dragoverids":["_drop_5vEWosSUXYh"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":240,"bottom":176,"altText":"5.png","pngfb":false,"pr":{"l":"Lib","i":57}},"html5data":{"xPos":0,"yPos":0,"width":240,"height":176,"strokewidth":0}},"width":240,"height":176,"resume":true,"useHandCursor":true,"id":"5xpZTJ32MCO"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":93,"id":"01","url":"story_content/6FUsBaWiIpE_80_B8_C70_Q2262626_DX576_DY576.swf","type":"normal","altText":"6.png","width":576,"height":576,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":408,"yPos":144,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":144,"rotateYPos":144,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":144,"snapy":144,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5vEWosSUXYh"],"dragoverids":["_drop_5vEWosSUXYh"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":288,"bottom":288,"altText":"6.png","pngfb":false,"pr":{"l":"Lib","i":58}},"html5data":{"xPos":0,"yPos":0,"width":288,"height":288,"strokewidth":0}},"width":288,"height":288,"resume":true,"useHandCursor":true,"id":"6LlKqOYA5Ma"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":94,"id":"01","url":"story_content/5lwpCuzY1MB_80_P_0_216_1080_648_DX454_DY454.swf","type":"normal","altText":"3.png","width":1080,"height":648,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":432,"yPos":416,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":113.5,"rotateYPos":68,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":113,"snapy":68,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5vEWosSUXYh"],"dragoverids":["_drop_5vEWosSUXYh"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":227,"bottom":136,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":59}},"html5data":{"xPos":0,"yPos":0,"width":227,"height":136,"strokewidth":0}},"width":227,"height":136,"resume":true,"useHandCursor":true,"id":"6AKDnGesCNQ","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":95,"id":"01","url":"story_content/6lW781kYV2B_80_P_0_168_1080_792_DX480_DY480.swf","type":"normal","altText":"5.png","width":1080,"height":792,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":184,"yPos":368,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":120,"rotateYPos":88,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":120,"snapy":88,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5vEWosSUXYh"],"dragoverids":["_drop_5vEWosSUXYh"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":240,"bottom":176,"altText":"5.png","pngfb":false,"pr":{"l":"Lib","i":60}},"html5data":{"xPos":0,"yPos":0,"width":240,"height":176,"strokewidth":0}},"width":240,"height":176,"resume":true,"useHandCursor":true,"id":"62miJBeS5ET","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":96,"id":"01","url":"story_content/6FUsBaWiIpE_80_DX576_DY576.swf","type":"normal","altText":"6.png","width":576,"height":576,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":608,"yPos":376,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":144,"rotateYPos":144,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":144,"snapy":144,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5vEWosSUXYh"],"dragoverids":["_drop_5vEWosSUXYh"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":288,"bottom":288,"altText":"6.png","pngfb":false,"pr":{"l":"Lib","i":61}},"html5data":{"xPos":0,"yPos":0,"width":288,"height":288,"strokewidth":0}},"width":288,"height":288,"resume":true,"useHandCursor":true,"id":"6VCEigcOVqJ","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":97,"id":"01","url":"story_content/6V79hghOxDD_80_B8_C80_Q2262626_P_0_240_1080_504_DX652_DY652.swf","type":"normal","altText":"7.png","width":1080,"height":504,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":160,"yPos":216,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":163,"rotateYPos":76,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":162,"snapy":76,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5vEWosSUXYh"],"dragoverids":["_drop_5vEWosSUXYh"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":326,"bottom":152,"altText":"7.png","pngfb":false,"pr":{"l":"Lib","i":62}},"html5data":{"xPos":0,"yPos":0,"width":326,"height":152,"strokewidth":0}},"width":326,"height":152,"resume":true,"useHandCursor":true,"id":"62PMzuHPNx7"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":98,"id":"01","url":"story_content/6V79hghOxDD_80_P_0_240_1080_504_DX652_DY652.swf","type":"normal","altText":"7.png","width":1080,"height":504,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":800,"yPos":392,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":163,"rotateYPos":76,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":162,"snapy":76,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5vEWosSUXYh"],"dragoverids":["_drop_5vEWosSUXYh"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":326,"bottom":152,"altText":"7.png","pngfb":false,"pr":{"l":"Lib","i":63}},"html5data":{"xPos":0,"yPos":0,"width":326,"height":152,"strokewidth":0}},"width":326,"height":152,"resume":true,"useHandCursor":true,"id":"5VmpLEgBvYn","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"60oyjOo6MVy_-1507125084","id":"01","linkId":"txt__default_60oyjOo6MVy","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":808,"bottom":78,"pngfb":false,"pr":{"l":"Lib","i":49}}}],"shapemaskId":"","xPos":224,"yPos":72,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":440,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":880,"bottom":82,"altText":"Pasangkan gambar hewan di bawah ini dengan cara menarik ke gambar yang sesuai.","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":0,"yPos":0,"width":880,"height":82,"strokewidth":0}},"width":880,"height":82,"resume":true,"useHandCursor":true,"id":"60oyjOo6MVy"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6JtZWqEhbDW_1960407705","id":"01","linkId":"txt__default_6JtZWqEhbDW","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":33,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":64}}}],"shapemaskId":"","xPos":184,"yPos":72,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":46,"altText":"2.","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":46,"strokewidth":0}},"width":48,"height":46,"resume":true,"useHandCursor":true,"id":"6JtZWqEhbDW"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":32,"id":"01","url":"story_content/6bLfGhdgb5O_80_DX210_DY210.swf","type":"normal","altText":"3.png","width":210,"height":210,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":33,"id":"02","url":"story_content/6bLfGhdgb5O_80_RE2FFA5_DX210_DY210.swf","type":"normal","altText":"3.png","width":210,"height":210,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1040,"yPos":600,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":52.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":105,"bottom":105,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":0,"yPos":0,"width":105,"height":105,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":0,"right":105,"bottom":105,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":0,"yPos":0,"width":105,"height":105,"strokewidth":0}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-8,"right":105,"bottom":97,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":0,"yPos":-8,"width":105,"height":105,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":-8,"right":105,"bottom":97,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":0,"yPos":-8,"width":105,"height":105,"strokewidth":0}}}],"width":105,"height":105,"resume":true,"useHandCursor":true,"id":"5bvkFIZwIQd","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_down","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.63hwAHnL0Ve"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.63hwAHnL0Ve"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.63hwAHnL0Ve"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.63hwAHnL0Ve"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.63hwAHnL0Ve"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.628ugUy7RgU.6Ix7qzJnLXz"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":14,"id":"01","url":"story_content/5rXZdCbl2Sk_80_DX210_DY210.swf","type":"normal","altText":"2.png","width":210,"height":210,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":15,"id":"02","url":"story_content/5rXZdCbl2Sk_80_RE2FFA5_DX210_DY210.swf","type":"normal","altText":"2.png","width":210,"height":210,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1152,"yPos":600,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":52.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":105,"bottom":105,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":0,"yPos":0,"width":105,"height":105,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":0,"right":105,"bottom":105,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":0,"yPos":0,"width":105,"height":105,"strokewidth":0}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-8,"right":105,"bottom":97,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":0,"yPos":-8,"width":105,"height":105,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":-8,"right":105,"bottom":97,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":0,"yPos":-8,"width":105,"height":105,"strokewidth":0}}}],"width":105,"height":105,"resume":true,"useHandCursor":true,"id":"6Na07wZ3GNq","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_down","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5iQcmc0RiBX"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5iQcmc0RiBX"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5iQcmc0RiBX"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.5iQcmc0RiBX"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5iQcmc0RiBX"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.628ugUy7RgU.6Dkm8x3ZDRm"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5vEWosSUXYh_CorrectReview","id":"01","linkId":"5vEWosSUXYh_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":53}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5vEWosSUXYh_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5vEWosSUXYh_IncorrectReview","id":"01","linkId":"5vEWosSUXYh_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":55}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":15,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":54}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5vEWosSUXYh_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');