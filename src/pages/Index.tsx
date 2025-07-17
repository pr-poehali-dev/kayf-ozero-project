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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              «Кайф Озеро» — легально зарегистрированный потребительский кооператив для успешных предпринимателей и инвесторов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Преимущества</h2>
            <p className="text-xl text-gray-600">Почему «Кайф Озеро» — ваш ключ к премиальным возможностям</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Shield" size={48} className="text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Юридическая защита</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Деятельность строго в рамках Устава и ФЗ «О потребительской кооперации»</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="UserCheck" size={48} className="text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Система верификации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Все участники — проверенные пайщики с гарантией конфиденциальности</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Gem" size={48} className="text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Эксклюзивная атмосфера</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Мероприятия только для членов кооператива в роскошных локациях</p>
              </CardContent>
            </Card>
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
              <div className="space-y-2 text-gray-400">
                <p>Телефон: +7 (XXX) XXX-XX-XX</p>
                <p>Email: info@kaif-ozero.ru</p>
                <p>Telegram: @kaif_ozero</p>
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