from django.conf.urls import include, url

from . import views
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

from django.contrib.auth import views as auth_views

urlpatterns = [

	url(r'^lire/$',views.lire, name='lire'),
	url(r'^ajouter_un_objet$', views.VOIRFormulaire, name='ajouter_un_objet'),
	url(r'^supprimer_objet/$',views.supprimer_objet, name='supprimer_objet'),
	url(r'^tout_supprimer/$',views.TOUTsupprimer, name='tout_supprimer'),
	url(r'^commenter_objet/$',views.formulaire_commentaire, name='commenter_objet'),
	url(r'^afficher_objet/$',views.afficher_objet, name='afficher_objet'),
	url(r'^login/$', auth_views.login, name='login'),
	url(r'^logout/$', auth_views.logout, {'next_page': '/accueil/lire'}, name='logout'),
	url(r'^profile/$', views.profile),
	
	url(r'^recherche/$',views.barre_recherche, name='recherche'),


]
