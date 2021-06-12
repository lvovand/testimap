var Pass = function (options) {
            this.init('pass', options, Pass.defaults);
        };

        //inherit from Abstract input
        $.fn.editableutils.inherit(Pass, $.fn.editabletypes.abstractinput);

        $.extend(Pass.prototype, {
            render: function () {
                this.$input = this.$tpl.find('input');
            },

            value2html: function (value, element) {
                if (!value) {
                    $(element).empty();
                    return;
                }
                var html = '********';
                $(element).html(html);
            },
            value2str: function (value) {
                var str = '';
                if (value) {
                    for (var k in value) {
                        str = str + k + ':' + value[k] + ';';
                    }
                }
                return str;
            },
            str2value: function (str) {
                return str;
            },
            value2input: function (value) {
                if (!value) {
                    return;
                }
                this.$input.filter('[name="old_pass"]').val('');
                this.$input.filter('[name="new_pass"]').val('');
                this.$input.filter('[name="new_pass_confirmation"]').val('');
            },
            input2value: function () {
                return {
                    old_pass: this.$input.filter('[name="old_pass"]').val(),
                    new_pass: this.$input.filter('[name="new_pass"]').val(),
                    new_pass_confirmation: this.$input.filter('[name="new_pass_confirmation"]').val()
                };
            },
            validate: function (value) {
                switch (true) {
                    case value.old_pass.trim().length == 0 || value.new_pass.trim().length == 0 || value.new_pass_confirmation.trim().length == 0:
                        return trans('validation.requireds');
                    case value.new_pass.length < 6:
                        return trans('validation.password.min');
                    case value.new_pass !== value.new_pass_confirmation:
                        return trans('validation.password.match');
                }
            }
            activate: function () {
                this.$input.filter('[name="old_pass"]').focus();
            },
            autosubmit: function () {
                this.$input.keydown(function (e) {
                    if (e.which === 13) {
                        $(this).closest('form').submit();
                    }
                });
            }
        });

        Pass.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
            tpl: '<div class="">' +
            '<div class="editable-password"><label><input type="password" placeholder="Senha Antiga" name="old_pass" class="form-control input-small"></label></div>' +
            '<div class="editable-password"><label><input type="password" placeholder="Nova Senha" name="new_pass" class="form-control input-small"></label></div>' +
            '<div class="editable-password"><label><input type="password" placeholder="Redigite a Senha" name="new_pass_confirmation" class="form-control input-mini"></label></div>' +
            '</div>',
            inputclass: ''
        });

        $.fn.editabletypes.pass = Pass;