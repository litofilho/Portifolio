	function LumisDouiErrorSummaryShow(summaryControlId, showEmbedded, showPopup)
	{
		var pMessages = document.getElementById(summaryControlId);
		
		var strMessages = "";
		if (pMessages != null)
		{
			strMessages = pMessages.value;
			pMessages.value='';
		}
	
		if (showEmbedded)
		{
			var pSummary = document.getElementById(summaryControlId + ".span");
			if (pSummary != null)
				pSummary.innerText = strMessages.replace("\\n", "<BR/>");
		}
		
		if (showPopup && strMessages.length > 0)
			alert(strMessages);
			
		return true;
	}	
			
	function LumisDouiErrorSummaryAddMessage(summaryControlId, message)
	{
		var pMessages = document.getElementById(summaryControlId);
		if (pMessages != null)
		{
			if (pMessages.value.length > 0)
				pMessages.value += "\n";
			pMessages.value += message;
		}
	}
	
	function LumisDouiErrorSummaryClear(summaryControlId)
	{
		var pMessages = document.getElementById(summaryControlId);
		if (pMessages != null)
			pMessages.value = "";
		
		return true;
	}