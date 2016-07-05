                function all(arr){
                    var deffered = $q.defer();
                    var count = 0;
                    var total = arr.length;
                    var responses = [];
                    for (var i=0;i<arr.length;i++){
                        arr[i].then(function(response){
                            responses.push(response);
                            count ++;
                            if (count === total){
                                deffered.resolve(responses);
                            } 
                        })
                    }

                    return deffered.promise;
                }