#from __future__ import unicode_literals


from appPrincipale.models import Categorie,Objet

from .forms import ObjetForm, ComentaireForm

from django.http import HttpResponse
from django.http import HttpResponse, Http404

from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from datetime import datetime

from django.contrib import auth
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm



# Create your views here.
#voir MonObjet et les images

def new_blog(request):
    	return render(request , 'appPrincipale/blog.html')

def new_about(request):
    return render(request, 'appPrincipale/about.html')

def new_contact(request):
    return render(request, 'appPrincipale/contact.html')

def new_index(request):
    categories = Categorie.objects.all()
    objets = Objet.objects.all()
    return render(request, 'appPrincipale/index.html',locals())

def new_services(request):
    return render(request, 'appPrincipale/services.html')

def new_work(request):
    objets = Objet.objects.all()
    return render(request, 'appPrincipale/work.html', locals())


def lire(request):
    monobjet = Objet.objects.all()
    return render(request, 'appPrincipale/lire.html', {'objets': monobjet})


def VOIRFormulaire(request) :

	if request.method=="GET" :
		monid=request.GET.get("return_objet","0");
		for article in Objet.objects.filter(id=monid):
			form=ObjetForm(instance=article)
			modifie=True
			objetID=article.id

	if request.method=="POST" :
		monid=request.POST.get("return_objet","0");
		nom="caca"
		if monid != "0" :
			for article in Objet.objects.filter(id=monid):
					nom=article.nom
			form=ObjetForm(request.POST, instance=article)
		else :
			form=ObjetForm(request.POST or None)

		if form.is_valid():
			form.save()
			envoie=True

	return render(request , 'appPrincipale/voirFormulaire.html', locals())

def supprimer_objet(request):
	if request.method=="POST" :
		monid=request.POST.get("return_objet","0");
		for article in Objet.objects.filter(id=monid):
			article.delete();
	return redirect(lire)

def TOUTsupprimer(request) :
	for article in Objet.objects.all():
			article.delete();
	return redirect(lire)

def formulaire_commentaire(request):
    form=ComentaireForm(request.POST or None)

    if form.is_valid() :
        form.save()
        envoie=True
        return redirect(lire)
    return render(request , 'appPrincipale/voirFormulaire_commentaire.html', locals())

def afficher_objet(request):
    monid=request.GET.get("return_objet","0");
    monobjet= Objet.objects.filter(id=monid);


    return render(request , 'appPrincipale/objet.html', {'objets': monobjet})

def profile(request):
    nom = request.user.username
    if(nom != ''):
        return render(request, 'appPrincipale/profile.html', locals())
    else:
        return redirect('/accueil/login')

def logout_view(request):

    auth.lougout(request)
    #auth.lougout(request)
    return HttpResponse("test")

def barre_recherche(request):
	categories = Categorie.objects.all()
	if request.method=="POST" :
		string_recherche_categorie=request.POST.get("Categorie","0")
		macat=Categorie.objects.filter(titre=string_recherche_categorie)
		recherche_objets = Objet.objects.filter(categorie=macat)

	return render(request, 'appPrincipale/test.html', locals())

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/accueil/profile')
    else:
        form = UserCreationForm()
    return render(request, 'appPrincipale/signup.html', {'form': form})
