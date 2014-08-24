function  ViewModel(){
	var self = this;
	
	self.ListLiterature = ko.observableArray([
		{id:"1", title:"О компании QAP INT", check: false},
		{id:"2", title:"Преимущества использования CLM-инструмента для Вашего бизнеса", check: false},
		{id:"3", title:"Перспективы сотрудничества с QAP INT", check: false},
		{id:"4", title:"Описание решения для разработки HTML5-презентаций", check: false},
		{id:"5", title:"Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (русский)", check: false},
		{id:"6", title:"Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (english)", check: false},
	]);
	self.ListSelectLiterature = ko.observableArray([]);
	self.email = ko.observable();
	self.topic = ko.observable();
	self.textMsg = ko.observable();
	self.warning = ko.observable();
	self.isVisible = ko.observable(false);

	self.showBlock = function(){
		if(self.textMsg() && self.email() && self.topic() && self.ListSelectLiterature().length != 0){
			self.isVisible(true);
			self.warning('Данные сохранены.');
		}
		else{
			self.warning('!!! Не заполнены все поля или не выбраны файлы.');
		}
	};

	self.SelectItems = function(data){
		var index = data.id - 1;	
			if(!data.check){
				self.ListLiterature.splice(index, 1);
				self.ListLiterature.splice(index, 0, data);
				self.ListSelectLiterature().forEach(function(item, currentIndex){
					if(item.id == data.id){
						self.ListSelectLiterature.splice(currentIndex, 1);
					}
				});
			}else{
				self.ListLiterature.splice(index, 1);
				self.ListLiterature.splice(index, 0, data);
				self.ListSelectLiterature.push(data); 
			}	
	};
}

ko.applyBindings(new ViewModel());