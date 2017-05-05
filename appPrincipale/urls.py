from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from . import views
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [

	url(r'^blog/$', views.new_blog, name='blog'),
	url(r'^about/$', views.new_about, name='about'),
	url(r'^contact/$', views.new_contact, name='contact'),
	url(r'^index/$', views.new_index, name='index'),
	url(r'^work/$', views.new_work, name='work'),
	url(r'^services/$', views.new_services, name='services'),
	url(r'^lire/$',views.lire, name='lire'),
	url(r'^ajouter_un_objet$', views.VOIRFormulaire, name='ajouter_un_objet'),
	url(r'^supprimer_objet/$',views.supprimer_objet, name='supprimer_objet'),
	url(r'^tout_supprimer/$',views.TOUTsupprimer, name='tout_supprimer'),
	url(r'^commenter_objet/$',views.formulaire_commentaire, name='commenter_objet'),
	url(r'^login/$', auth_views.login, name='login'),
	url(r'^logout/$', auth_views.logout, {'next_page': '/accueil/lire'}, name='logout'),
	url(r'^profile/$', views.profile),
	url(r'^inscription/$', views.signup, name='inscription'),

]
