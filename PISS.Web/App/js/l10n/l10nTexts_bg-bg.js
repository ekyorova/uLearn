/*global angular*/
(function (angular) {
  'use strict';
  angular.module('l10nTexts_bg-bg', ['l10n']).config(['l10nProvider', function(l10n){
    l10n.add('bg-bg', {
      navbar: {
        exit: 'Изход',
        changePass: 'Смяна на паролата',
        diplomaWork: 'Дипломна работа',
        diplomaWorkProposals: 'Предложения',
        diplomaWorkReviews: 'Рецензии',
        probationPractices: 'Преддипломен стаж',
        probationPracticeProposals: 'Предложения',
        probationPracticeGrades: 'Оценки',
        phds: 'Докторанти',
        commonWorkPlan: 'Общ работен план',
        individualPlan: 'Индивидуален план',
        anualWrokPlan: 'Работен план по години',
        admin: 'Администратор',
        users: 'Потребители',
        reports: 'Справки'
      },
      scaffolding: {
        scFiles: {
          manyFiles: '{{filesCount}} прикачени файла.',
          noFiles: 'Няма прикачени файлове.',
          modal: {
            title: 'Прикачени файлове',
            accept: 'Запис',
            cancel: 'Отказ',
            noFilesAttached: 'Няма прикачени файлове'
          }
        }
      },
      uLearn: {
        requiredField: 'Задължително поле',
        diplomaWorkProposals: {
          subject: 'Тема',
          anotation: 'Анотация',
          goal: 'Цел',
          problems: 'Задачи',
          limitations: 'Ограничения',
          term: 'Срок'
        },
        diplomaWorkReviews: {
          diplomaWorkTitle: 'Тема:',
          component: 'Компонент',
          grade: 'Оценка',
          common: 'Общи',
          theoretical: 'Теоретична обосновка',
          ownIdeas: 'Собствени идеи',
          completion: 'Изпълнение на заданието',
          style: 'Стил и оформление',
          realisation:'Реализация',
          structure: 'Структура и архитектура',
          functionality: 'Функционалност',
          reliability: 'Надеждност',
          documentation: 'Документация',
          еxperimentalPart: 'Експериментална част',
          experimentalDetails: 'Описание на експеримента',
          resultsPresentation: 'Представяне на резултатите',
          resultsInterpretation: 'Интерпретация на резултатите',
          averageMark:'Обща оценка:',
          generalOpinion: 'Обобщено мнение:',
          questions: 'Въпроси:'
        },
        practiceProposals: {
          title:'Предложение за стаж ',
          company: 'От Фирма/Организация:',
          companyInfo:'Информация за фирмата:',
          trainee:'Стажант:',
          subject: 'Тема:',
          anotation: 'Анотация:',
          goal: 'Цел на стажа:',
          tasks: 'Задачи, произтичащи от целта:',
          condition: 'Ограничаващи условия:',
          duration:'Продължителност на проекта:',
          workPlace: 'Работно място:'
        },
        practiceRatings: {
          title:'Оценка за стаж',
          subject:'Тема:',
          completion:'Мнение за степента на изпълнение на целите и задачите на стажа:',
          results: 'Постигнати резултати:',
          aquiredSkills:'Придобити умения по време на стажа:',
          finishedOnTime:'Спазен ли е срокът за изпълнение:',
          reasons: 'По какви причини:',
          opinion: 'Мнение за професионалната подготовка на стажанта:',
          overallRatings: 'Обща оценка:',
          recommendations: 'Препоръки към стажанта:'
        }
      },
      users: {
        search: {
          username: 'Потребителско име',
          name: 'Име',
          activity: 'Активност',
          onlyActive: 'Само активни',
          onlyUnactive: 'Само неактивни',
          roles: 'Роли',
          active: 'Активен',
          noUsersFound: 'Няма намерени потребители',
          yes: 'Да',
          no: 'Не',
          'new': 'Нов потребител',
          search: 'Търси',
          edit: 'Редакция'
        },
        edit: {
          username: 'Потребителско име:',
          usernameInvalid: 'потребителското име трябва да е поне 5 символа' +
            ' и да съдържа само букви, числа, подчертавки (_) и точки (.)',
          usernameExists: 'потребителското име е заето',
          firstName: 'Име:',
          secondName:'Презиме:',
          lastName: 'Фамилия:',
          password: 'Парола:',
          passMustBeMin8symbols: 'паролата трябва да бъде поне 8 символа',
          repeatPass: 'Повтори парола:',
          doNotMatch: 'паролите не съвпадат',
          phone: 'Телефон:',
          email: 'email:',
          address: 'Адрес:',
          facultyNumber: 'Факултетен номер:',
          department: 'ВУЗ:',
          course: 'Специалност:',
          title: 'Титла:',
          type: 'Роля:',
          save: 'Запис',
          cancel: 'Отказ'
        }
      },
      datatableDirective: {
        firstPage: 'Първа страница',
        lastPage: 'Последна страница',
        nextPage: 'Следваща',
        previousPage: 'Предишна  ',
        info: 'Намерени общo _TOTAL_ резултата (от _START_ до _END_)',
        datatableInfo: 'Показани резултати от ',
        to: ' до ',
        all: ' от общо ',
        noDataAvailable: 'Няма намерени резултати',
        displayRecords: '_MENU_ на страница',
        search: 'Търси',
        filtered: ' (филтрирани от _MAX_ записа)',
        deleteColumns: 'Колони'
      }
    });
  }]);
}(angular));
