var app = angular.module('PhanAnhSuCo.controllers.Main', []);

app.controller('MainController', function ($scope) {

    $scope.linhvuc = [{
        "class": {
            "full": "btn btn-rounded btn-block btn-primary",
            "outline": "btn btn-rounded btn-block btn-outline-primary"
        },
        "title": "Giao Thông"
    },
    {
        "class": {
            "full": "btn btn-rounded btn-block btn-info",
            "outline": "btn btn-rounded btn-block btn-outline-info"
        },
        "title": "Cấp Nước"
    },
    {
        "class": {
            "full": "btn btn-rounded btn-block btn-warning",
            "outline": "btn btn-rounded btn-block btn-outline-warning"
        },
        "title": "Thoát Nước"
    },
    {
        "class": {
            "full": "btn btn-rounded btn-block btn-danger",
            "outline": "btn btn-rounded btn-block btn-outline-danger"
        },
        "title": "Viễn Thông"
    },
    {
        "class": {
            "full": "btn btn-rounded btn-block btn-success",
            "outline": "btn btn-rounded btn-block btn-outline-success"
        },
        "title": "Cây Xanh"
    },
    {
        "class": {
            "full": "btn btn-rounded btn-block btn-secondary",
            "outline": "btn btn-rounded btn-block btn-outline-secondary"
        },
        "title": "Chiếu Sáng"
    },
    {
        "class": {
            "full": "btn btn-rounded btn-block btn-dark",
            "outline": "btn btn-rounded btn-block btn-outline-dark"
        },
        "title": "Điện Lực"
    }];

    $scope.data = [{
        "id": 1,
        "image": "https://1022.tphcm.gov.vn/Portals/0/Images/no-image-standar.jpg",
        "title": "Người dân báo: Nắp hố ga hư hỏng, bị bể, lủng một lỗ rất nguy hiểm.",
        "tag": "Thoát Nước",
        "more": "Anh Tuấn - 10:24 - 30/11/2018"
    },
    {
        "id": 2,
        "image": "http://khoahocphattrien.vn/Images/Uploaded/Share/2015/09/27/Cay-xanh-giup-moi-nguoi-kiem-them-hang-nghin-USD-moi-nam_1.jpg",
        "title": "Người dân báo: Nắp hố ga hư hỏng, bị bể, lủng một lỗ rất nguy hiểm.",
        "tag": "Thoát Nước",
        "more": "Anh Tuấn - 10:24 - 30/11/2018"
    },
    {
        "id": 3,
        "image": "https://1022.tphcm.gov.vn/Portals/0/Images/no-image-standar.jpg",
        "title": "Người dân báo: Nắp hố ga hư hỏng, bị bể, lủng một lỗ rất nguy hiểm.",
        "tag": "Thoát Nước",
        "more": "Anh Tuấn - 10:24 - 30/11/2018"
    },
    {
        "id": 4,
        "image": "https://1022.tphcm.gov.vn/Portals/0/Images/no-image-standar.jpg",
        "title": "Người dân báo: Nắp hố ga hư hỏng, bị bể, lủng một lỗ rất nguy hiểm.",
        "tag": "Thoát Nước",
        "more": "Anh Tuấn - 10:24 - 30/11/2018"
    },
    {
        "id": 5,
        "image": "https://1022.tphcm.gov.vn/Portals/0/Images/no-image-standar.jpg",
        "title": "Người dân báo: Nắp hố ga hư hỏng, bị bể, lủng một lỗ rất nguy hiểm.",
        "tag": "Thoát Nước",
        "more": "Anh Tuấn - 10:24 - 30/11/2018"
    },
    {
        "id": 6,
        "image": "https://1022.tphcm.gov.vn/Portals/0/Images/no-image-standar.jpg",
        "title": "Người dân báo: Nắp hố ga hư hỏng, bị bể, lủng một lỗ rất nguy hiểm.",
        "tag": "Thoát Nước",
        "more": "Anh Tuấn - 10:24 - 30/11/2018"
    },
    {
        "id": 7,
        "image": "https://1022.tphcm.gov.vn/Portals/0/Images/no-image-standar.jpg",
        "title": "Người dân báo: Nắp hố ga hư hỏng, bị bể, lủng một lỗ rất nguy hiểm.",
        "tag": "Thoát Nước",
        "more": "Anh Tuấn - 10:24 - 30/11/2018"
    },
    {
        "id": 8,
        "image": "https://1022.tphcm.gov.vn/Portals/0/Images/no-image-standar.jpg",
        "title": "Người dân báo: Nắp hố ga hư hỏng, bị bể, lủng một lỗ rất nguy hiểm.",
        "tag": "Thoát Nước",
        "more": "Anh Tuấn - 10:24 - 30/11/2018"
    }];

    $scope.FinalResult = [];

    //start to proccess 
    setTimeout(function () { $scope.Result(); });

    //Here pass data from Records to FinalResult in each interaction
    $scope.Result = function () {
        dif = $scope.data.length - $scope.FinalResult.length;
        currentRow = $scope.FinalResult.length;
        if (dif > 0) {
            $scope.FinalResult.push($scope.data[currentRow]);
        }
        if ($scope.data.length > $scope.FinalResult.length) {
            setTimeout(function () { $scope.Result(); }, 30);
        }
        //refresh
        $scope.$apply();
    }

    $scope.getFinalResult = function () {
        return $scope.FinalResult;
    }

    $scope.changeTab = function (e) {
        $scope.FinalResult = [];
        setTimeout(function () { $scope.Result(); });
        $(document).find("a").removeClass("active-pasc");
        $('a[href^="' + e + '"]').addClass("active-pasc");
    }

    $scope.getDataLV = function (e) {
        $scope["clickBtn" + e] = !$scope["clickBtn" + e];
    }

    $scope.search = function () {
        var input = $scope.dataSearch;
        if (input.length > 3) {
            console.log(input);
        }
    }


    $(document).ready(function () {

        $('.search').each(function () {
            var self = $(this);
            var div = self.children('.field');
            var placeholder = div.children('input').attr('placeholder');
            var placeholderArr = placeholder.split(/ +/);
            if (placeholderArr.length) {
                var spans = $('<div />');
                $.each(placeholderArr, function (index, value) {
                    spans.append($('<span />').html(value + '&nbsp;'));
                });
                div.append(spans);
            }
            self.click(function () {
                self.addClass('open');
                setTimeout(function () {
                    self.find('input').focus();
                    self.find('input').on('keyup', function () {
                        self.toggleClass('loading', (self.find('input').val().toString().length > 3));
                    });
                }, 750);
            });
            $(document).click(function (e) {
                if (!$(e.target).is(self) && !jQuery.contains(self[0], e.target)) {
                    self.removeClass('open loading');
                    setTimeout(function () {
                        self.find('input').val('');
                    }, 400);
                }
            });
        });

    });


});

app.controller('ContentController', function ($scope, $routeParams, $window) {
    if ($routeParams.id == undefined || $routeParams.id == "") {
        $window.location.href = '/';
    }
    console.log($routeParams.id);
    $scope.idPost = $routeParams.id;
});