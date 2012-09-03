var regionData = null;
$.fn.createChart = function(value) {
    var html = 'poop';
    
    getData = function(){	
	if(regionData){
		switch(regionData){
			case 'south':
				return regionData + ' was set!';
				break;
			case 'north':
				return regionData + ' was set!';
				break;
		}	
	}else{
		return '<br />no region was set';
	}
    }

    return this.append(getData);
},
$.fn.setData = function(region){
	if(region){
		switch(region){
			case 'south':
				regionData = 'south';
				break;
			case 'north':
				regionData = 'north';
				break;
		}
	    return this.append(' set data! ');
	}else{
		return this.append(' data could not be set! Please set a parameter');
	}
};

