import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Crown" size={32} className="text-purple-400" />
            <h1 className="text-2xl font-bold">Кайф Озеро</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-purple-400 transition-colors">О клубе</a>
            <a href="#advantages" className="hover:text-purple-400 transition-colors">Преимущества</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Проекты</a>
            <a href="#reviews" className="hover:text-purple-400 transition-colors">Отзывы</a>
            <a href="#join" className="hover:text-purple-400 transition-colors">Вступить</a>
          </nav>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Войти в клуб
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-purple-600 text-white px-4 py-2">
            Закрытый инвестиционный клуб
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Кайф Озеро: Где Рождаются<br />
            Инвестиции Премиум-Класса
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Войдите в круг избранных. Инвестируйте в эксклюзивные проекты на уникальных LUX-мероприятиях закрытого бизнес-кооператива.
          </p>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-300 mb-6">
              Устали от шумных выставок и поверхностных знакомств? Ищете доступ к по-настоящему выгодным проектам в атмосфере доверия и высокого статуса?
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Добро пожаловать в "Кайф Озеро" – ваш закрытый инвестиционный клуб на базе надежного потребительского кооператива. Мы создали пространство, где элита бизнеса встречается для серьезных сделок в формате исключительного комфорта.
            </p>
            <p className="text-xl text-purple-400 font-semibold">
              "Кайф Озеро" – это не просто клуб. Это ваш статус. Это ваши эксклюзивные возможности. Это инвестиции, заключенные в атмосфере роскоши и взаимного уважения.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
              <Icon name="Crown" size={20} className="mr-2" />
              Узнать условия вступления
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg">
              Запросить приглашение
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 bg-gray-900/50 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="mb-2">
              <strong>P.S.</strong> Количество мест ограничено. Убедитесь, что ваше место в этом уникальном инвестиционном кругу уже зарезервировано.
            </p>
            <p className="text-purple-400 font-semibold">
              Кайфуйте от бизнеса на новом уровне с "Кайф Озеро"!
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">О клубе</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Добро пожаловать в "Кайф Озеро" – ваш закрытый инвестиционный клуб на базе надежного потребительского кооператива. 
              Мы создали пространство, где элита бизнеса встречается для серьезных сделок в формате исключительного комфорта.
            </p>
            <Badge className="bg-purple-600 text-white px-6 py-2 text-lg">
              Легально зарегистрированный потребительский кооператив
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/img/06f602a5-b52f-4934-9b31-63f7df28e5e9.jpg" 
                alt="Luxury yacht networking"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Lock" size={24} className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Эксклюзивность</h3>
                    <p className="text-gray-600">Закрытое сообщество проверенных пайщиков с обязательством конфиденциальности</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Briefcase" size={24} className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Премиум проекты</h3>
                    <p className="text-gray-600">Презентации лучших инвестиционных проектов на LUX-мероприятиях</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Handshake" size={24} className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Элитный нетворкинг</h3>
                    <p className="text-gray-600">Общение и партнерства с лидерами рынка в неформальной обстановке</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Что делает нас особенными</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Мы не просто организуем встречи – мы создаем уникальную экосистему для премиальных инвестиций
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Icon name="Users" size={32} className="text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-black">Селективность</h4>
                <p className="text-sm text-gray-600">Тщательный отбор участников и проектов для максимальной ценности</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Icon name="Sparkles" size={32} className="text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-black">Роскошь</h4>
                <p className="text-sm text-gray-600">Изысканные локации и безупречный сервис премиум-класса</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Icon name="Shield" size={32} className="text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-black">Надежность</h4>
                <p className="text-sm text-gray-600">Юридическая защита через структуру кооператива</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Почему "Кайф Озеро" – ваш ключ к премиальным возможностям</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Мы создали уникальную экосистему для элитного бизнеса, где каждый элемент работает на ваш успех</p>
          </div>
          
          <div className="space-y-16">
            {/* Эксклюзивность */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Icon name="Crown" size={64} className="text-purple-600 mb-6" />
                  <h3 className="text-3xl font-bold mb-4 text-black">Эксклюзивность как Стандарт</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Мы тщательно отбираем участников и проекты. Это не массовое мероприятие. Это закрытый круг доверенных партнеров, где ценятся репутация и потенциал.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Icon name="Users" size={20} className="text-purple-600" />
                    <span className="text-gray-600">Только проверенные пайщики</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={20} className="text-green-600" />
                      <span className="text-gray-700">Строгий отбор участников</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={20} className="text-green-600" />
                      <span className="text-gray-700">Гарантия конфиденциальности</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={20} className="text-green-600" />
                      <span className="text-gray-700">Репутационные гарантии</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LUX-Мероприятия */}
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" size={20} className="text-purple-400" />
                        <span className="text-gray-200">Изысканные локации</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Sparkles" size={20} className="text-purple-400" />
                        <span className="text-gray-200">Безупречный сервис</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Music" size={20} className="text-purple-400" />
                        <span className="text-gray-200">Живая музыка</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Utensils" size={20} className="text-purple-400" />
                        <span className="text-gray-200">Изысканное застолье</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Icon name="Gem" size={64} className="text-purple-400 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">LUX-Мероприятия: Бизнес в Высшей Лиге</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Забудьте о скучных конференц-залах. Мы проводим роскошные бизнес-ивенты. Изысканные локации, безупречный сервис, атмосфера премиум-класса – фон для ваших самых важных переговоров.
                  </p>
                </div>
              </div>
            </div>

            {/* Проекты и нетворкинг */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader className="text-center pb-6">
                  <Icon name="Briefcase" size={48} className="text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Презентация Лучших Проектов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    В центре внимания – тщательно отобранные инвестиционные проекты наших партнеров. Вы получаете доступ к предложениям, которые редко выходят за кулисы узкого круга.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <p className="text-sm text-purple-800 font-semibold text-center">
                      Эксклюзивные предложения только для членов клуба
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader className="text-center pb-6">
                  <Icon name="Users" size={48} className="text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Мощный Нетворкинг с Лидерами</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Ваши соседи за столом – топовые спикеры, лидеры рынков, владельцы капиталов. Здесь завязываются партнерства, о которых другие только мечтают.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <p className="text-sm text-purple-800 font-semibold text-center">
                      Элита бизнеса в одном месте
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Симбиоз дела и кайфа */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <Icon name="Heart" size={64} className="text-white mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-6">Идеальный Симбиоз Дела и Кайфа</h3>
              <p className="text-lg text-purple-100 mb-8 max-w-4xl mx-auto">
                Серьезный разговор о цифрах плавно перетекает в неформальное общение. Живая музыка, изысканное застолье, развлекательная программа – не просто антураж, а инструмент для глубокого погружения в проекты и построения искренних отношений.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Icon name="TrendingUp" size={32} className="text-white mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Бизнес</h4>
                  <p className="text-sm text-purple-100">Серьезные переговоры и сделки</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Icon name="Plus" size={32} className="text-white mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">+</h4>
                  <p className="text-sm text-purple-100">Плавный переход</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Icon name="Smile" size={32} className="text-white mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Кайф</h4>
                  <p className="text-sm text-purple-100">Неформальная атмосфера</p>
                </div>
              </div>
            </div>

            {/* Погружение и надежность */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <Icon name="Eye" size={48} className="text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-black">"Погружение" в Проекты</h3>
                <p className="text-gray-700 mb-6">
                  Мы не просто показываем слайды. Мы создаем среду, где можно прочувствовать проект, задать вопросы без ограничений, обсудить детали с авторами в неформальной обстановке доверия.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-blue-800 font-semibold">
                    Это инвестиции с полным пониманием
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl p-8">
                <Icon name="Shield" size={48} className="text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-black">Надежность Кооператива</h3>
                <p className="text-gray-700 mb-6">
                  Потребительский кооператив – это прозрачная и надежная юридическая платформа для взаимодействия, обеспечивающая безопасность и соблюдение интересов всех пайщиков.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-green-800 font-semibold">
                    Юридическая защита и прозрачность
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Проекты</h2>
            <p className="text-xl text-gray-600">Доступ к проектам в ключевых сферах экономики</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Building" size={32} className="text-purple-600" />
                  <Badge className="bg-purple-100 text-purple-800">Недвижимость</Badge>
                </div>
                <CardTitle className="text-xl">Премиальная недвижимость</CardTitle>
                <CardDescription>Инвестиции в коммерческую и жилую недвижимость премиум-класса</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Совместные проекты по приобретению и развитию объектов недвижимости через механизмы кооператива</p>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Zap" size={32} className="text-purple-600" />
                  <Badge className="bg-purple-100 text-purple-800">Энергетика</Badge>
                </div>
                <CardTitle className="text-xl">Альтернативная энергетика</CardTitle>
                <CardDescription>Инновационные проекты в сфере возобновляемых источников энергии</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Участие в развитии экологически чистых энергетических проектов будущего</p>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Отзывы</h2>
            <p className="text-xl text-gray-600">Что говорят наши пайщики</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр М.</CardTitle>
                    <CardDescription>Инвестор, IT-сфера</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"Атмосфера клуба действительно уникальная. Здесь можно спокойно обсудить серьезные проекты в неформальной обстановке. Уже участвую в двух проектах благодаря знакомствам в клубе."</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена К.</CardTitle>
                    <CardDescription>Предприниматель, недвижимость</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"Эксклюзивность и качество мероприятий на высшем уровне. Каждая встреча — это возможность найти новых партнеров и интересные проекты. Рекомендую всем серьезным инвесторам."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Вступить в клуб</h2>
            <p className="text-xl mb-8 text-purple-100">
              Присоединяйтесь к избранным. Откройте двери в мир эксклюзивных проектов и связей на уровне LUX.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Условия вступления</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Статус участника</h4>
                  <p className="text-purple-100">Пайщик потребительского кооператива</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Минимальный взнос</h4>
                  <p className="text-purple-100">От 500 000 ₽</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Процедура</h4>
                  <p className="text-purple-100">Подача заявления в Совет кооператива</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Гарантии</h4>
                  <p className="text-purple-100">Возврат паевого взноса при выходе</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg">
                <Icon name="Crown" size={20} className="mr-2" />
                Подать заявление
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Crown" size={24} className="text-purple-400" />
                <h3 className="text-xl font-bold">Кайф Озеро</h3>
              </div>
              <p className="text-gray-400">Закрытый инвестиционный клуб премиум-класса</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-purple-400" />
                  <a href="tel:+7XXXXXXXXXX" className="hover:text-purple-400 transition-colors">
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-purple-400" />
                  <a href="mailto:info@kaif-ozero.ru" className="hover:text-purple-400 transition-colors">
                    info@kaif-ozero.ru
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={18} className="text-purple-400" />
                  <a href="https://t.me/kaif_ozero" className="hover:text-purple-400 transition-colors">
                    @kaif_ozero
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Instagram" size={18} className="text-purple-400" />
                  <a href="https://instagram.com/kaif_ozero" className="hover:text-purple-400 transition-colors">
                    @kaif_ozero
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-800">
                <h5 className="font-semibold mb-3 text-purple-400">Социальные сети</h5>
                <div className="flex space-x-4">
                  <a href="https://t.me/kaif_ozero" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Icon name="MessageCircle" size={24} />
                  </a>
                  <a href="https://instagram.com/kaif_ozero" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a href="https://wa.me/7XXXXXXXXXX" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Icon name="Phone" size={24} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Акцент на эстетику и эксклюзивность
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Юридическая информация</h4>
              <p className="text-gray-400 text-sm">
                Потребительский кооператив «Кайф Озеро»<br />
                Деятельность регулируется ФЗ № 3085-1 «О потребительской кооперации»
              </p>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>© 2025 Кайф Озеро. Все права защищены.</p>
            <p className="mt-2 text-sm">Количество мест ограничено. Убедитесь, что ваше место зарезервировано.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;